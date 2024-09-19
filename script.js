function price(){
    let v = parseFloat(document.getElementById('v').value);
    let i = parseFloat(document.getElementById('i').value);
    let n = parseFloat(document.getElementById('n').value);
    let p = (v * Math.pow(1+i , n) * i)/(Math.pow(1+i , n)-1);

    alert(p);
}