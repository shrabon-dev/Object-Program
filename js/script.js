var input_nmbr_one = document.querySelector(".first__nmbr")
var input_nmbr_two = document.querySelector(".second__nmbr")
var btn__plus = document.querySelector(".btn1")
var btn__minus = document.querySelector(".btn2")
var btn__multiple = document.querySelector(".btn3")
var btn__divide = document.querySelector(".btn4")
var output = document.querySelector(".p")

var plus = Number(input_nmbr_one.value)+Number(input_nmbr_two.value)
var minus = Number(input_nmbr_one.value)-Number(input_nmbr_two.value)
var multiple = Number(input_nmbr_one.value)*Number(input_nmbr_two.value)
var divide = Number(input_nmbr_one.value)/Number(input_nmbr_two.value)


btn__plus.addEventListener("click",function(){
  output.innerHTML = "Result : " + plus;
})
btn__minus.addEventListener("click",function(){
  output.innerHTML = "Result : " + minus;
})

btn__multiple.addEventListener("click",function(){
  output.innerHTML = "Result : " + multiple;
})
btn__divide.addEventListener("click",function(){
  output.innerHTML = "Result : " + divide;
})
