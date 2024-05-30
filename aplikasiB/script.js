function tambah() {
    let a1 = document.getElementById("angka1").value;
    let a2 = document.getElementById("angka2").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    let hasil = a1 + a2;
    document.getElementById("hasil").value = hasil;

}

function kurang() {
    let a1 = document.getElementById("angka1").value;
    let a2 = document.getElementById("angka2").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    let hasil = a1 - a2;
    document.getElementById("hasil").value = hasil;

}

function bagi() {
    let a1 = document.getElementById("angka1").value;
    let a2 = document.getElementById("angka2").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    let hasil = a1 / a2;
    document.getElementById("hasil").value = hasil;

}

function kali() {
    let a1 = document.getElementById("angka1").value;
    let a2 = document.getElementById("angka2").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    let hasil = a1 * a2;
    document.getElementById("hasil").value = hasil;

}