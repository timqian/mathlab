var fs = require("fs")
  , path = require('path')
  , basename = path.basename;

/**
* 2011 Peter 'Pita' Martischka
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS-IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * This is the parser, it generates a object out of a javascript file
 * @param filename, the file you wanna parse
 */
exports.parseFile = function(baseFolder, filename)
{
  console.error("parse file '" + baseFolder + "/" + filename + "'...");

  var parsedObj = {};
  
  //get the name of the module
  var name = basename(filename, '.js');
  parsedObj.name = name;

  //get the require path
  var requirePath = "./" + name; 
  parsedObj.path = requirePath;

  //read the file
  var code = fs.readFileSync(baseFolder + "/" + filename, "utf8");
  
  //search the comment of the document
  var docCommentRegExp = /^\s*\/\*\*?((.|\n|\r)*?)\*\//m;
  var match = docCommentRegExp.exec(code);
  if(match != null)
  {
    var docComment = match[1];
    docComment = docComment.replace(/\n\s*\*\s*/mg, "\n");
    docComment = trimStr(docComment);
    parsedObj.comment = docComment;
  
    //cut the document away from the rest of the code
    code = code.substr(match.index + match[0].length);
  }
  
  //get all exported functions with a regular expression
  var functions = [];
  var functionsRegExp = /exports.([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*function\s*\(([0-9a-zA-Z_$,\s]*)\)*/gm;
  var match = functionsRegExp.exec(code);
  while(match != null)
  {
    functions.push(match);
    match = functionsRegExp.exec(code);
  }
  
  parsedObj.functions = {};
  
  //go trough the functions and move all information to the parsedObj
  for(var i in functions)
  {
    //create a entry for the name
    var functionName = functions[i][1];
    parsedObj.functions[functionName] = {param: []};
    
    //get the params
    var functionParam = trimStr(functions[i][2]).length > 0 ? functions[i][2].split(",") : [];
    
    //trim the params and add them to the obj
    for(var i in functionParam)
    {
      var paramName = trimStr(functionParam[i]);
      
      //parsedObj.functions[functionName].param[paramName] = {};
      parsedObj.functions[functionName].param.push({name: paramName})
    }
  }
  
  //get all exported variables with a regular expression
  parsedObj.variables = {};
  var variableRegExp = /exports.([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*/gm;
  var match = variableRegExp.exec(code);
  while(match != null)
  {
    var varname = match[1];
    
    if(!parsedObj.functions[varname])
    {
      parsedObj.variables[varname] = {};
    }
    
    match = variableRegExp.exec(code);
  }
  
  //search all jsdoc blocks in front of a exports variable
  var jsdocBlocks = {};
  var blockRegExp = /(\/\*\*(.|\n|\r)*?\*\/)\s*exports\.([a-zA-Z_$][0-9a-zA-Z_$]*)/mg;
  var match = blockRegExp.exec(code);
  while(match != null)
  {
    jsdocBlocks[match[3]] = match[1];
    match = blockRegExp.exec(code);
  }
  
  //go trough all jsdocblocks
  for(var i in jsdocBlocks)
  {
    //fish all comments out of the jsdoc block
    var jsdocBlock = jsdocBlocks[i];
    var type = parsedObj.variables[i] ? "var" : "func";
    var obj = type == "var" ? parsedObj.variables[i] : parsedObj.functions[i];
    var commentRegExp = /\/\*\*((.|\n|\r)*?)(@|\*\/)/m;
    var comment = commentRegExp.exec(jsdocBlock)[1];
    comment = comment.replace(/\n\s*\*\s*/mg, "\n");
    comment = trimStr(comment);
    
    //save the comment
    obj.comment = comment;
    
    //search tags in jsdoc block
    var tagRegExp = /@([a-zA-Z0-9]+)((.|\n|\r)*?)\*\//mg;
    var jsdocBlockEscapedAt = jsdocBlock.replace(/@/g, "*/@");
    var match = tagRegExp.exec(jsdocBlockEscapedAt);
    while(match != null)
    {
      var tagType = match[1];
      var tagText = match[2];
      tagText = tagText.replace(/\n\s*\*\s*/mg, "\n");
      tagText = trimStr(tagText);
      
      //if this is a function param
      if(tagType == "param" && type == "func")
      {
        var paramRegExp = /^(\{(.*?)\})?\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*((.|\n|\r)*)/m;
        
        var match = paramRegExp.exec(tagText);
        
        var paramName    = match[3];
        var paramType    = match[2];
        var paramComment = match[4];
        
        var paramNum = -1;
        for(var i in obj.param)
        {
          if(obj.param[i].name == paramName)
            paramNum = i;
        }
        
        if(paramNum == -1)
        {
          console.error("WARN: Parameter does not exist in this function! @param " + paramName);
        }
        else
        {
          obj.param[paramNum].comment = paramComment;
          obj.param[paramNum].type = paramType;
        }
      }
      //if this is a return tag
      else if(tagType == "return" && type == "func")
      {
        var returnRegExp = /^\s*(\{(.*?)\})?\s*((.|\n|\r)*)/m;
        
        var match = returnRegExp.exec(tagText);
        
        var returnType    = match[2];
        var returnComment = match[3];
        
        obj.return = {type: returnType, comment: returnComment};
      }
      else if(tagType == "type" && type == "var")
      {
        obj.type = tagText;
      }
      else
      {
        console.error("WARN: Unknown Tag @"+tagType + ": " + paramComment);
      }
      
      match = tagRegExp.exec(jsdocBlockEscapedAt);
    }
  }

  console.log("done");

  return parsedObj;
}

function trimStr(str)
{
  return str.replace(/^\s*/, "").replace(/\s*$/,"");
}