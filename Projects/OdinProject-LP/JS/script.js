console.log("Hello World!");

let a = 20;

console.log(typeof(a));

document.getElementsByClassName("addBtn").onclick = function(){

    let a = document.getElementById("aLabel").value;
    a = Number(a);
    let b = document.getElementById("bLabel").value;
    b = Number(b);

    let c = a + b;

    document.getElementById("cLabel").innerHTML = "Sum of " + a + " and " + b + " is equal to = " + c;
}