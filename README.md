# PARAMS
Loadtime Function Parameters Collection

* enforces strict naming system
* eliminates namespace collisions/confusion
* strong design patterns created
* reduces programming language anti-patterns
* eventually to be connected to a codefactory/sophisticated-codebase
* eventually inherits from namespace module

PARAMS has two seperate functionalities.

0) used in dedicated projects
  0.0 loadtime params used upon program templating or bootstrapping
  0.1 used for reserved programs inside or out of 0.0
1) used by terminal / non project runtime reasons
  1.0) cli or non project promotes the premeditative creation of structure

Interfaces

0) function(paramsOBJ):{paramsOBJ}
   * paramsOBJ must not be empty
   * no duplicate keys allowed

// terminal version
1) function(paramsOBJ):{create,read,update,delete}
   * paramsOBJ can be empty
   * no duplicate keys allowed

let paramsOBJ = {
      // enumerables interface // "name": "function as string; expression"
      cb:   `$DTypes.function($p)`,
      prop: `$DTypes.string($p)`, 
      obj:  `$DTypes.object($p)`,
      cb:   `$Dtypes.function($p)`,
      prop: `$Dtypes.string($p)`,
      val:  `$Dtypes.undefined($p)`
};

require("params")(paramsOBJ);



