const path = require("path");

console.log(path.dirname("/workspaces/Node_js/OS_Module/Path_Module/path.js"));
console.log(path.extname("/workspaces/Node_js/OS_Module/Path_Module/path.js"));
console.log(path.basename("/workspaces/Node_js/OS_Module/Path_Module/path.js"));

console.log(path.parse("/workspaces/Node_js/OS_Module/Path_Module/path.js")); //path.parse()returns an object whose properties represent significant elements of path like dir, basename, ext , root 


const mypath = path.parse("/workspaces/Node_js/OS_Module/Path_Module/path.js");

console.log(mypath);        // full object
console.log(mypath.name);   // "path"
console.log(mypath.root);   // root
