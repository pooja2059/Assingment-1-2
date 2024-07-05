export function add(){
    let a = document.getElementById("1").value;
    let b = document.getElementById("2").value;
 
    let c;
    c = parseInt(a) + parseInt(b);
    document.getElementById("result").value = c;
 }
 