"use strict";

var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#4211a9";
dodger.style.bottom = "0px";
dodger.style.left = "10px";
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = "".concat(left - 1, "px");
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = "".concat(left + 1, "px");
  }
}