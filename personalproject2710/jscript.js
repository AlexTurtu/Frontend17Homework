var i = 100;
var j = 50;
var palmTop = 100 ;
var plamLfet = 50;
var coinTop = 100;
var coinLeft = 50;
var score = 0;
var selectArray = ["demo","demo1"];
function startG(){
   
    palmTop = Math.floor(Math.random()*4);
    palmLeft = Math.floor(Math.random()*7);
    palmTop = palmTop * 100;
    palmLeft = palmLeft * 100;
    document.getElementById("palm1").style.top = palmTop +"px";
    document.getElementById("palm1").style.left = palmLeft+"px";
}
function randomCoin(){
    coinTop = Math.floor(Math.random()*4);
    coinLeft = Math.floor(Math.random()*7);
    coinTop = coinTop *50;
    coinLeft = coinLeft *100;
    document.getElementById("coin").style.left = coinLeft+"px";
    document.getElementById("coin").style.top = coinTop +"px";
    
}
function checkMatch(){
    if (coinTop == j  && coinLeft == i ) {
        score = score +100;
       randomCoin()
      document.getElementById("score").innerHTML = score
        
    }
}


function mover() {
    
    if ( i!= palmLeft  || j !== palmTop  + 150 && j != palmTop + 100 ){
        while (i < 700 ){
            checkMatch()
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
    
    if ( i!= palmLeft +200  || j !== palmTop+100 && j != palmTop+150){
            while (i > 100){
                checkMatch()
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
    checkMatch()
    if (i!=palmLeft+100 || j != palmTop+200){
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
    checkMatch()
    if (i != palmLeft + 100 || j != palmTop+50 ){
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

