function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arrHasil = [];
    var awal = 0;
    var akhir = 0;
    for (var j = 0; j<arrPenumpang.length;j++){
    for (var k = 0;k < arrPenumpang[j].length;k++){
      for (var i = 0; i < rute.length; i++){
          if (arrPenumpang[j][1]==rute[i]) {
            awal = i            
          }
          if (arrPenumpang[j][2]==rute[i]) {
            akhir = i            
          }
          var hasil = (akhir - awal) * 2000
        }
      }
          arrHasil.push ({
          penumpang: arrPenumpang[j][0],
          naikDari: arrPenumpang[j][1],
          tujuan: arrPenumpang[j][2],
          bayar: hasil
          })
    }
    return arrHasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]