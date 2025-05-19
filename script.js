let boxes = document.querySelectorAll(".box");
let restartGame = document.querySelector(".reset-btn")
let wmsg = document.getElementById("win-message");
let unhide = document.getElementById("win-popup");

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let flag = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // if (flag) {
        //     box.innerText = "O";
        //     flag = false;
        // } else {
        //     box.innerText = "X";
        //     flag = true;
        // }
        box.innerText = flag ? "O" : "X";
        flag= !flag;
        box.disabled = true;

        (function () {
            for (let pattern of winPatterns) {
                let val0 = boxes[pattern[0]].innerText;
                let val1 = boxes[pattern[1]].innerText;
                let val2 = boxes[pattern[2]].innerText;

                if (val0 != "" && val1 != "" && val2 != "") {
                    if (val0 === val1 && val1 === val2) {
                        // console.log(`winner is ${val0}`);
                        btnDisabble();
                        showWinner(val0);
                    }
                }
            }
        })();
    })
})
//disble btns after get winner
function btnDisabble() {
    boxes.forEach((box) => box.disabled = true);
}
function btnEnable() {
    boxes.forEach((box) => box.disabled = false);
}
function clear() {
    boxes.forEach((box) => box.innerText = "");
}
function showWinner(msg) {
    wmsg.innerHTML = `Winner is ${msg}....!`;
    unhide.style.display = "flex";
    // removeWinnerMsg
    setTimeout(() => unhide.style.display = "none", 5000)

}

function newGame() {
    restartGame.addEventListener("click", () => {
       clear();
       btnEnable();
       flag = true;
    })
}
newGame();  //start new game


