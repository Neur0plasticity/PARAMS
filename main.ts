export interface paramsLoader {
    (paramsOBJ:paramsOBJ): {paramsOBJ} | {create,read,update,delete}
};
export interface paramsOBJ {
    [index: string]: string
    // let pS = { // params_obj
        // name: function as string
        // func: `$DTypes.function($p)`,
        // prop: `$DTypes.string($p)`,
        // obj:  `$DTypes.object($p)`,
        // cb:   `$Dtypes.function($p)`,
        // prop: `$Dtypes.string($p)`,
        // val:  `$Dtypes.undefined($p)`
    // };
};
export const params:paramsLoader = function(paramsOBJ){

    // no duplicates allowed --> objects don't automatically overwrite duplications
    if (!paramsOBJ) {throw new Error();}
    for (let k in paramsOBJ) { eval(`params[k] = function(${k}){ return ${paramsOBJ[k].replace("$p",k)}; }`); }
    return params;
};
export const paramsTerminal:paramsLoader = function(paramsOBJ) {

    
    // load params file
        // create if none
    
    // if loaded 
        // merge paramsOBJ input into file // check for duplicates


    // return {create,read,update,delete}
};