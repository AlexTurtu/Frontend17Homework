var i = 0;
function mover() {
    i = i + 10
    document.getElementById("demo").style.left = i+"px";
    document.getElementById("demo").style.right = i +"px";
}
function movel(){
    i = i - 10
    document.getElementById("demo").style.left = i+"px";
    document.getElementById("demo").style.right = i +"px";
}
function moveu(){
    i = i - 10
    document.getElementById("demo").style.top = i+"px";
    document.getElementById("demo").style.bottom = i+"px";
}
function moved(){
    i = i + 10
    document.getElementById("demo").style.top = i+"px";
    document.getElementById("demo").style.bottom = i+"px";
}

