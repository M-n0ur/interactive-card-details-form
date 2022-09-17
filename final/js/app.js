const nam = document.querySelector("#name")
const numb = document.querySelector("#cardNumber")
const mon =document.querySelector("#month")
const year =document.querySelector("#year")
const cvc =document.querySelector("#cvc")

const form =document.querySelector("form")

const errDate =document.querySelector("#errDate")
const errCvc =document.querySelector("#errCvc")
const errNumber =document.querySelector("#errNumber")
const errName =document.querySelector("#errName")

const allErr = Array.from( document.querySelectorAll(".err")); 

const nameInsideCard =document.querySelector(".nameInsideCard");
const numInsideCard =document.querySelector(".numInsideCard");
const cvcInsideCard =document.querySelector(".cvcInsideCard");
const monthInsideCard =document.querySelector("#mm");
const yearInsideCard =document.querySelector("#yy");



for(let er of allErr){
    er.classList.add("hidden");
}
form.addEventListener('submit',function(){
    console.log ('submit')
})

numb.addEventListener('input', function () {
    let str =numb.value ;
    let mystr = '';
    for(let i = 0 ; i<=numb.value.length -1 ; ++i){ 
        mystr +=str[i]
        if(i ===3)mystr += " "
        if(i ===7)mystr += " "
        if(i ===11)mystr += " "
    }
    numInsideCard.textContent = mystr ;
})
///////////////////////////////
nam.addEventListener('input', function () {
    let str =nam.value ;
    str.toUpperCase()
    nameInsideCard.textContent = str ;
})
////////////////cvc
cvc.addEventListener('input', function () {
    let str =cvc.value ;
    str.toUpperCase()
    cvcInsideCard.textContent = str ;
})
//////////////// month
mon.addEventListener('input', function () {
    let str =this.value ;
    str.toUpperCase()
    monthInsideCard.textContent = str ;
})
////////////////year
year.addEventListener('input', function () {
    let str =this.value ;
    str.toUpperCase()
    yearInsideCard.textContent = str ;
})
////////////////
function inval1(){
errName.classList.remove("hidden");
}
function val1(){
errName.classList.add("hidden");
}
function inval2(){
errNumber.classList.remove("hidden");
}
function val2(){
errNumber.classList.add("hidden");
}
function inval3(){
    errDate.classList.remove("hidden");
}
function val3(){
    errDate.classList.add("hidden");
}
function inval4(){
    errCvc.classList.remove("hidden");
}
function val4(){
    errCvc.classList.add("hidden");
}

/////////////////////////////////////