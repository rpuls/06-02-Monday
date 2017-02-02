// EX-8 – ES2015 Modules
// Rewrite the f(..) method from EX5 into a reusable es2015 module, and import the function into a new file and test.
// Hint: Since you are using Node, Node will think of this as one of its own modules and look into node_modules for the module unless you do the usual "./myModule" for your own modules

exports.f = function (x,y,...rest){
  return rest;
}