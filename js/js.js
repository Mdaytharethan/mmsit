var x
var y
console.log(y);
console.log(x);
function myFunction(){
    y = document.getElementById("text_2").value;
    console.log(y);
    x = document.getElementById("text_1").value;
    console.log(x);
    if(x!=y){
        document.write("error error");
    }
    else{
        document.write("good job");
    }
}
