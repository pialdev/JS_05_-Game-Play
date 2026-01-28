// First Screen FunsctionS Start
let fstScn = document.getElementById("fstScn");
let fstTxt = document.getElementById("fstTxt");
let fstInp = document.getElementById("fstInp");
let fstBtn = document.getElementById("fstBtn");
let fstError = document.getElementById("fstError");
//===========================
fstBtn.addEventListener("click", () => {
  if (fstInp.value == "") {
    // fstError.style.display = "block";
  } else {
    fstScn.style.display = "none";
    secondScn.style.display = "block";
    SecondTxt.innerText = `Player-1 ${fstInp.value}`;
  }
});
// First Screen FunsctionS End
// Second Screen FunsctionS Start
let secondScn = document.getElementById("secondScn");
let SecondTxt = document.getElementById("SecondTxt");
let SecondInp = document.getElementById("SecondInp");
let SecondBtn = document.getElementById("SecondBtn");
let SecondError = document.getElementById("SecondError");
//==============================
SecondBtn.addEventListener("click", () => {
  if ((SecondInp.value = "")) {
    SecondError.style.display = "block";
  } else {
    secondScn.style.display="none";
    thirdScn.style.display = "block"; 
  }
});
// Second Screen FunsctionS End
// First Screen FunsctionS Start
let thirdScn = document.getElementById("thirdScn");
let thirdTxt = document.getElementById("thirdTxt");
let thirdInp = document.getElementById("thirdInp");
let thirdBtn = document.getElementById("thirdBtn");
let thirdError = document.getElementById("thirdError");
//================================
thirdBtn.addEventListener('click', ()=>{
  if (thirdScn.value="") {
  thirdError.style.display="block";
}
else{
  thirdScn.style.display="none";
  fourthScn.style.display="block"
}
})
// First Screen FunsctionS End
// Fourth Screen FunsctionS Start
let fourthScn = document.getElementById("fourthScn")
let fourthTxt = document.getElementById("fourthTxt")
let fourthInp = document.getElementById("fourthInp")
let fourthBtn = document.getElementById("fourthBtn")
let fourthError = document.getElementById("fourthError")
//==========================
fourthBtn.addEventListener("click", ()=>{
  if (fourthInp.value="") {
    fourthError.style.display="block"
  }
  else{
    fourthScn.style.display="none"
    fifthScn.style.display="block"
  }
})
// Fourth Screen FunsctionS End
// Fifth Screen FunsctionS Start
let fifthScn = document.getElementById("fifthScn")
let fifthTxt = document.getElementById("fifthTxt")
let fifthInp = document.getElementById("fifthInp")
let fifthBtn = document.getElementById("fifthBtn")
let fifthError  = document.getElementById("fifthError")
//==========================
fifthBtn.addEventListener("click", ()=>{
  if (fifthInp.value="") {
    fifthError.style.display="block"
  }
  else{
    fifthScn.style.display="none"
    sixthScn.style.display="block"
  }
})
// Fifth Screen FunsctionS End
// sixth Screen FunsctionS Start
let sixthScn = document.getElementById("sixthScn")
let sixthTxt = document.getElementById("sixthTxt")
let sixthInp = document.getElementById("sixthInp")
let sixthBtn = document.getElementById("sixthBtn")
let sixthError = document.getElementById("sixthError")
//=======================

// sixth Screen FunsctionS End
