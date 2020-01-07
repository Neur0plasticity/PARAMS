"use strict";
exports.__esModule = true;
;
;
exports.params = function (paramsOBJ) {
    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {
        throw new Error();
    }
    for (var k in paramsOBJ) {
        eval("params[k] = function(" + k + "){ return " + paramsOBJ[k].replace("$p", k) + "; }");
    }
    return exports.params;
};
exports.paramsTerminal = function (paramsOBJ) {
    // load params file
    // create if none
    // if loaded 
    // merge paramsOBJ input into file // check for duplicates
    // return {create,read,update,delete}
};
