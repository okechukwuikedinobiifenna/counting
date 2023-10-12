let count = 0
console.log(count)
document.getElementById("counting").innerText = count;
function buttonadd(){
count++
document.getElementById("counting").innerText = count;
};
function buttonminus(){
count--
document.getElementById("counting").innerText = count;
};