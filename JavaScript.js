function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function exp(a, b) {
    return a ** b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}


function aas(a,b){
    return a = b;
}
function aasa(a,b){
    return a += b;
}
function aass(a,b){
    return a -= b;
}
function aasm(a,b){
    return a *= b;
}
function aasd(a,b){
    return a /= b;
}
function aasm(a,b){
    return a %= b;
}
function aase(a,b){
    return a **= b;
}


function comne(a,b){
    return a != b;
}
function comg(a,b){
    return a > b;
}
function coml(a,b){
    return a < b;
}
function comge(a,b){
    return a >= b;
}
function comle(a,b){
    return a <= b;
}

console.log("      ••• Om Bheem Bush Calsi 🧮 •••");
console.log("\n👉 Operations will performed by- \n 1. Arithmetic \n 2. Assignment \n 3. Comparison \n ")
    let a = prompt("\n• Enter the value a - ");
    a = Number.parseInt(a)
    let b = prompt("• Enter the value b - ");
    b = Number.parseInt(b)
   /* console.log("add [+], sub [-], mul [*], exp [**], div[/], mod[%]");*/
    let sum = prompt("• Enter the Operator - ");
   
    if (sum == "+") {
        alert(" - Your answer is - " + add(a,b));
        
    } else if (sum == "-") {
        alert("Your answer is - " + sub(a, b));
       
    } else if (sum == "*") {
        alert("Your answer is - " + mul(a, b));
    } else if (sum == "**") {
        alert("Your answer is - " + exp(a, b));
    } else if (sum == "/") {
        alert("Your answer is - " + div(a, b));
    }
     else if (sum == "%"){
      alert("Your answer is - " + mod(a, b));
    }
    else if (sum == "="){
      alert("Your answer is - " + aas(a, b));
    }
    else if (sum == "+="){
      alert("Your answer is - " + aasa(a, b));
    }
    else if (sum == "-="){
      alert("Your answer is - " + aass(a, b));
    }
    else if (sum == "%="){
      alert("Your answer is - " + aasm(a, b));
    }
    else if (sum == "/="){
      alert("Your answer is - " + aasd(a, b));
    }
    else if (sum == "**="){
      alert("Your answer is - " + aase(a, b));
    }
    else if (sum == "!="){
      alert("Your answer is - " + comne(a, b));
    }
    else if (sum == ">"){
      alert("Your answer is - " + comg(a, b));
    }
    else if (sum == "<"){
      alert("Your answer is - " + coml(a, b));
    }
    else if (sum == ">="){
      alert("Your answer is - " + comge(a, b));
    }
    else if (sum == "<="){
      alert("Your answer is - " + comle(a, b));
    }
    
    /*function add(a,b){
        return a+b
    }
   let a = prompt("a - ")
   //a = Number.parseInt(a)
   let b = prompt("b - ")
   //b = Number.parseInt(b)
   console.log(typeof add(a,b))*/

