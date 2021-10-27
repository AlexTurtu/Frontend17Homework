var i = 100;
var j = 50;
var selectArray = ["demo","demo1"];
function mover() {
    if ( i!= 200  || j !== 200 && j != 150 ){
        while (i < 700 ){
            i = i + 100
            document.getElementById("monster").style.left = i+"px";
            document.getElementById("monster").style.right = i +"px";
            return;
        }
    }else{
            alert("Avoid the palm tree")
        }
    
}
function movel(){
    if ( i!= 400 || j !== 200 && j != 150){
            while (i > 100){
            i = i - 100
            document.getElementById("monster").style.left = i+"px";
            document.getElementById("monster").style.right = i +"px";
            return;
        }
    }else{
        alert("Avoid the palm tree")
    }
}
function moveu(){
    if (i!=300 || j != 250){
    while(j>100){
    j = j - 50
    document.getElementById("monster").style.top = j+"px";
    document.getElementById("monster").style.bottom = j+"px";
    return;
    }
}else{
    alert("Avoid the palm tree")
}
}
function moved(){
    if (i != 300 || j !=100 ){
        while (j <500 ){
        j = j + 50
        document.getElementById("monster").style.top = j+"px";
        document.getElementById("monster").style.bottom = j+"px";
        return;
        }
    }else{
        alert("Avoid the palm tree")
    }
}

