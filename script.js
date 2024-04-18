console.log("Hello");

const button = document.getElementById("btn");
const input = document.getElementById("num");
const guessNum = Math.floor(Math.random() * 100 + 1);
const result = document.getElementById("result");
const sel = document.getElementById("select");

let count = 0;

function check(num, guess) {
  if (num === guess) {
    result.innerHTML = "You guessed it right. Want to play again?";
    input.disabled = true;
    sel.style.display = "block";
    button.disabled = true;
    return true;
  } else {
    result.innerHTML = "Wrong Guess";
    return false;
  }
}

function guess() {
  count++;
  if (count <= 10) {
    let num = Number(input.value);
    if (check(num, guessNum)) return;
    if (count == 10) {
      result.innerHTML = `Your turn is over. The number was ${guessNum}.<br> Want to play again?`;
      sel.style.display = "block";
      input.disabled = true;
      button.disabled = true;
    }
  }
  console.log(count);
  console.log(guessNum);
}
