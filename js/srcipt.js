const array = [
    Math.E,
    Math.PI,
    Math.LOG10E,
    Math.LOG2E,
    Math.LN10,
    Math.LN2,
    Math.SQRT2,
    Math.SQRT1_2
  ]

  for (const item of array) {
    document.getElementById("getnum").innerHTML += `${item}<br>`
  }

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6")

num1.addEventListener("click", (event) =>{
    alert(Math.abs(-9))
})

num2.addEventListener("click", (event) =>{
    alert(Math.cos(0))
})

num3.addEventListener("click", (event) =>{
    alert(Math.cos(Math.PI))
})

num4.addEventListener("click", (event) =>{
    alert(Math.acos(0))
})

num5.addEventListener("click", (event) =>{
    alert(Math.sin(0))
})

num6.addEventListener("click", (event) =>{
    alert(Math.random(0.44051778077089376))
})