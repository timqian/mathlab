function anonymous(y) {
  var x = this;
  if (!(y instanceof numeric.T)) { y = new numeric.T(y); }
  var add = numeric.add;
  var sub = numeric.sub;
  var mul = numeric.mul;
  if (x.y) {
    if (y.y) {
      return new numeric.T(sub(mul(x.x, y.x), mul(x.y, y.y)), add(mul(x.x, y.y), mul(x.y, y.x))); }
    return new numeric.T(mul(x.x, y.x), mul(x.y, y.x)); }
  if (y.y) {
    return new numeric.T(mul(x.x, y.x), mul(x.x, y.y)); }
  return new numeric.T(mul(x.x, y.x)); }