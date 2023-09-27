
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor="#4211a9"
dodger.style.bottom="0px"
dodger.style.left="10px"

document.addEventListener("keydown",(e)=>{
  if(e.key === "ArrowLeft"){
    moveDodgerLeft();
  } else{
    moveDodgerRight()
  }

});

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px","");
  const left = parseInt(leftNumbers,10)
  
  if(left > 0) {
  dodger.style.left =`${left -1}px`
  }
}
function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace("px","");
  const left = parseInt(leftNumbers,10)
  
  if(left > 0) {
  dodger.style.left =`${left +1}px`
  }
}