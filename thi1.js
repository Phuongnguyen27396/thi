var button = document.getElementById("generate");
button.onclick = function generate() {
var randomNum = Math.floor((Math.random() * 4) + 1);
var el = document.getElementById('ranNum');
el.innerHTML = randomNum;

if (randomNum ===1) alert("Văn A")
if (randomNum ===2) alert("Thị B")
if (randomNum ===3) alert("Hoàng C")
if (randomNum ===4) alert("Thị D")
};