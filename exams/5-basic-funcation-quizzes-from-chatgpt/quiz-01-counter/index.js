let count = 0;
document.getElementById("count").innerText = count;
console.log(count);

function increseFunction() {
    count++;
    document.getElementById("count").innerText = count;
    console.log(count);
}

function decreaseFunction() {
    count--;
    if (count < 0) {
        count = 0;
    }
    document.getElementById("count").innerText = count;
    console.log(count);
}

function resetFuncation() {
    count = 0;
    document.getElementById("count").innerText = count;
    let lightShade = "#6d6d6db9";
    document.getElementsByClassName("card")[0].style.backgroundColor = lightShade;
    console.log(count);
}

