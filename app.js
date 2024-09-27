var head = document.querySelector("#btn-1")
var tail = document.querySelector("#btn-2")
var result = document.querySelector("#result")
var num;

function toss(para) {
    num = Math.ceil(Math.random(num) * 2)
    if (para === 1 && num === 1 || para === 2 && num === 2) {
        result.innerHTML = "The Winner Is Heads!"
        console.log("You Win The Toss!" + num);

    } else {
        console.log("You Loss The Toss!" + num);
        result.innerHTML = "The Winner Is Tails!"
    }
}