
const result = document.querySelector(".result")
const head = document.querySelector(".head").innerHTML
const tale = document.querySelector(".tale").innerHTML


function headFunc() {

    const num = Math.ceil(Math.random() * 2)
    console.log(num);
    if (num === 1 && head == "head") {
        result.innerHTML = "you win the toss"
    } else if (num === 2 && head == "head") {
        // console.log(num);
        result.innerHTML = "loss win the toss"
    }
}

function taleFunc() {
    const num = Math.ceil(Math.random() * 2)
    console.log(num);
    if (num === 1 && tale == "tale") {
        result.innerHTML = "you loss the toss"
    } else if (num === 2 && tale == "tale") {
        result.innerHTML = "you win the toss"
    }
}