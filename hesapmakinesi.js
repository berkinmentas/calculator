var ekrantemizleme;
var sayi = 0;
var sembol;
var sonuc;

function tus(gelen) {
    var sonuc = document.getElementById('sonucekran').value;
    if (ekrantemizleme == 1) {
        ekrantemizleme = 0;
        document.getElementById('sonucekran').value = gelen;
    } else {
        document.getElementById('sonucekran').value = sonuc + gelen;
    }
    return false;
}
function islem(gelen){
    sayi = document.getElementById('sonucekran').value;
    console.log('ilk sayi')
    console.log(sayi);
    sembol=gelen;
    ekrantemizleme = 1;
}
function esittir() {
    var ekran = document.getElementById('sonucekran').value;
    console.log('sonsayi')
    console.log(ekran)
    sonuc = sayi + sembol + ekran;
    sembol="";
    console.log('sonuc')
    console.log(sonuc)
    document.getElementById('sonucekran').value=eval(sonuc);
    console.log('sonucumuz');
    console.log(eval(sonuc));
}
function sil(){
    document.getElementById("sonucekran").value = "";
    ekrantemizleme = 0;
    sayi ="";
    sembol= "";
    sonuc= "";
}

// function islem() {
//     sayi = document.getElementById('sonucekran').value;
//     console.log('ilk sayi')
//     console.log(sayi);
//     if (document.getElementsByName('+')) {
//         ekrantemizleme = 1;
//         sembol = "+";
//     }
//     if(document.getElementsByName('-')) {
//         console.log('eksiye tıkladın')
//         ekrantemizleme = 1;
//         sembol = "-";
//     }
//     if(document.getElementsByName('*')) {
//         ekrantemizleme = 1;
//         sembol = "*";
//     }
//     if(document.getElementsByName('/')) {
//         ekrantemizleme = 1;
//         sembol = "/";
//     }
//
// }
//
// function esittir() {
//     var ekran = document.getElementById('sonucekran').value;
//     console.log('sonsayi')
//     console.log(ekran)
//     sonuc = sayi + sembol + ekran;
//     sembol="";
//     console.log('sonuc')
//     console.log(sonuc)
//     document.getElementById('sonucekran').value=eval(sonuc);
//     console.log('sonucumuz');
//     console.log(eval(sonuc));
//
// }
