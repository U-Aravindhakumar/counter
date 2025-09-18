const degreesbutn = document.getElementById("degrees");
const resetbutn = document.getElementById("reset");
const increesbutn = document.getElementById("increes");
const countlable = document.getElementById("countlabel");
let count = 0;

increesbutn.onclick = function(){
    count++;
    countlable.textContent = count;
}

degreesbutn.onclick = function(){
    count--;
    countlable.textContent = count;
}

resetbutn.onclick = function(){
    count = 0;
    countlable.textContent = count;
}