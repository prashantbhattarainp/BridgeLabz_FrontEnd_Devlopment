//Question => Define inner function inside outer function and access outer function variable inside inner function call inner function inside outer function scope.

//Lexical Scope
function outerFunction(){
    let func = "I am in Outer Function and in Lexical Scope";
    function innerFunction(){
        console.log(func);
    }
    innerFunction();
}
outerFunction();