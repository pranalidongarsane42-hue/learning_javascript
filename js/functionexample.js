var a,b,result;

function add(){
    a=Number(document.myArithmeticOperations.n1.value);
    b=Number(document.myArithmeticOperations.n2.value);
    result=a+b;

    document.myArithmeticOperations.res.value=result.toFixed(2);
}

function sub(){
    a=Number(document.myArithmeticOperations.n1.value);
    b=Number(document.myArithmeticOperations.n2.value);
    result=a-b;

    document.myArithmeticOperations.res.value=result.toFixed(2);
}

function multi(){
    a=Number(document.myArithmeticOperations.n1.value);
    b=Number(document.myArithmeticOperations.n2.value);
    result=a*b;

    document.myArithmeticOperations.res.value=result.toFixed(2);
}

function div(){
    a=Number(document.myArithmeticOperations.n1.value);
    b=Number(document.myArithmeticOperations.n2.value);
    result=a/b;

    document.myArithmeticOperations.res.value=result.toFixed(2);
}

function modu(){
    a=Number(document.myArithmeticOperations.n1.value);
    b=Number(document.myArithmeticOperations.n2.value);
    result=a%b;

    document.myArithmeticOperations.res.value=result.toFixed(2);
}