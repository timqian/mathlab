// used to build bundles in dist/ for browser
var mathlab = require('./lib/index')

if(window !== "undefined") {
	window.mathlab = mathlab; 
}