function checknum(num){ 
    if (num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}
document.getElementById("sub-id").addEventListener("click", 
    function(){
        let num = document.getElementById("input-id").value;
        let result = checknum(num);
        if(result){
            document.getElementById("res").innerHTML = num + "is a Prime number .";
        }
        else{
            document.getElementById("res").innerHTML = num + "is not a Prime number .";
        }
    }
);
document.getElementById("id-clear")
    .addEventListener("click", () => {
        document.getElementById("input-id").value = "";
        document.getElementById("res").innerHTML = "Result";
    })