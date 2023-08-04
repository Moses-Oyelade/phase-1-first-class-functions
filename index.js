// function giveMe(){
    
//     return 'Call me kind';
// }
// giveMe();

// function receivesAFunction(giveMe){
//     return "You do well";
// }
// receivesAFunction();

const chai = "chai";
const spies = "chai-spies";

const spy = function spy(){
   result = chai * spies;
    return result;
};


let cow;

function receivesAFunction(spy){
    return spy();
}


function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return (function(){
        "come in now"
    })
}