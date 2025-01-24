const buttonEle = document.querySelectorAll("button");
const inputFieldEle=document.getElementById("result");
// console.log(buttonEle);
for (let i = 0; i < buttonEle.length; i++) {
  buttonEle[i].addEventListener("click", () => {
    const buttonValue = buttonEle[i].textContent;
    if (buttonValue ==="C") {
        clearFun();
    }else if (buttonValue === "=") {
        calFun();
    } else {
        appendValue(buttonValue);
    }
 
  });
}

function clearFun(){
inputFieldEle.value="";
}
function calFun(){
   inputFieldEle.value=eval(inputFieldEle.value);
}
function appendValue(buttonValue) {
    inputFieldEle.value +=buttonValue;
}