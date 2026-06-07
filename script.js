function solve(){
const aval = document.getElementById("a")
const bval = document.getElementById("b")
const cval = document.getElementById("c")
const Aval = document.getElementById("A")
const Bval = document.getElementById("B")
const Cval = document.getElementById("C")

let a = Number(aval.value)
let b = Number(bval.value)
let c = Number(cval.value)
let A = Number(Aval.value)
let B = Number(Bval.value)
let C = Number(Cval.value)

let valx = document.getElementById("valx")
let valy = document.getElementById("valy")

/* Logic */

    let det = (a*B)-(A*b)
    if (det == 0){valx.innerHTML = "NO SOLUTIONS"}
    let detx = (B*c)-(b*C) 
    let dety = (C*a)-(c*A)
    
    let x = detx / det
    let y = dety / det

    console.log(x)
    console.log(y)
    valx.innerHTML = x;
    valy.innerHTML = y;

}

