let x;
let y;
let l;

document.getElementById("rollButton").onclick = function(){
     x = Math.floor(Math.random() * 20) + 1;
     y = Math.floor(Math.random() * 20) + 1;
     l = Math.floor(Math.random() * 20) + 1;

     document.getElementById("xlabel").innerHTML = x
     document.getElementById("ylabel").innerHTML = y
     document.getElementById("zlabel").innerHTML = l
}