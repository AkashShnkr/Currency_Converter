import countryList from "./codes.js";
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
 const formCurr=document.querySelector(".from");
 const toCurr=document.querySelector('.to');
const dropdowns = document.querySelectorAll(".drop_down select");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
for (let select of dropdowns) {
  for (const Currcode in countryList) {
    let newOptions = document.createElement("option");
    newOptions.innerText = Currcode;
    newOptions.value = Currcode;
    if (select.name == "from" && Currcode === "USD") {
      newOptions.selected = "selected";
    } else if (select.name == "to" && Currcode === "INR") {
      newOptions.selected = "selected";
    }
    select.append(newOptions);

    select.addEventListener("change", (event) => {
      updateFlag(event.target);
    });
  }}
  const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
  };
  
const btn=document.querySelector("button");
 btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".Amount input");
    let amt = amount.value;
    console.log(amt);
    if(amt===""||amt <1){
        amt=1;
        amount.value="1";
    } 
    let f=fromcurr.value.toLowerCase();let t=tocurr.value.toLowerCase();
const URL=`${BASE_URL}/${f}/${t}.json`;
console.log(URL);
let response= await fetch(URL);
let data=await response.json();
let rate=data[tocurr.value.toLowerCase()];
let finalAmount=amt*rate;
msg.innerText=`${amt} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`
 });