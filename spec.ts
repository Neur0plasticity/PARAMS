import { params } from './main';

const alg:Function = params;
const throwE = function() {throw new Error(arguments[0]);}

console.log(alg);
console.log("params should be a function");
    typeof params === "function" || throwE();
console.log("params only accepts object");
    alg({});
console.log("detects letters only as first");
    let passed = false;
    try {
        alg({
            0:      "not allowed",
            "0n":   "not allowed"
        });
    } catch(e) {
        passed = true;
    }
    (passed)?console.log("detects letters only as first"):throwE();
console.log("returns a function wrapped string value input");
    let z = alg({
        val: `typeof val !== 'undefined'`
    });
    console.log(Object.keys(z).length);
    Object.keys(z).length === 1 || throwE();
    console.log(z.val.toString());
    z.val.toString() === "function(val){ return typeof val !== 'undefined'; }" || throwE();