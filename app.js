var head = document.querySelector("#btn-1")
var tail = document.querySelector("#btn-2")
var result = document.querySelector("#result")
var num;

function toss(para) {
    num = Math.ceil(Math.random(num) * 2)
    if (para === 1 && num === 1 || para === 2 && num === 2) {
        result.innerHTML = "You Win The Toss!"
        console.log("You Win The Toss!" + num);

    } else {
        console.log("You Loss The Toss!" + num);
        result.innerHTML = "You Loss The Toss!"
    }
}

if (num === 1){
    console.log("Its a Head")
} else if(num === 2){
    console.log("Its a Tail")
}