const output = document.querySelector('#output')
const nama = document.querySelector('#nama')
function tampil(){
    output.innerHTML = nama.value
}

   function a() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById('jumlah').value);
    var hasil=harga*jumlah;
    document.getElementById('hasil').innerHTML=hasil;
   }