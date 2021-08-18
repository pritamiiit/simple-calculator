let result = document.getElementById("inputext");

let calculate=(number)=>{
    result.value=result.value+number;
}

let resultl=()=>{ //if Uncaught SyntaxError: Identifier 'result' has already been declaredwill come then just rename the function name
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter valid input");
    }
}
function clr(){
    result.value=" ";
}

function del()
{
    result.value=result.value.slice(0,-1);
}