class P { x = ""; go() { return utils.escapeHtml("oren"); } }
class S extends P { x = ""; go() { return "oren"; } }
var p = new P();
console.log(decodeURI(p.go()))
