// let mahasiswa = {
//     nama : "shandika galih",
//     nrp : "030403020",
//     email : "shandikagalih@unpas.ac.id"

// }

// console.log(JSON.stringify(mahasiswa));
//console.log(mahasiswa);

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//  if (xhr.readyState == 4 && xhr.status == 200){

//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
    
//     }
// }
// xhr.open('GET', 'coba.JSON', true);
// xhr.send();

$.getJSON('coba.JSON', function(data) {
    console.log(data);
});