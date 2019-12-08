function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var jumlah = 0;
  var arr   = [];
  for (var i = 1; i <= angka; i++){
    for (var j = 1; j <=angka; j++){
       var perkalian = i*j;
      if (perkalian == angka && i!==j) {
        var gabung = String(i) + String(j);
        arr.push(gabung)
      }  
      }
    }
    var minimumsebelumnya = arr[0].length
for (var k = 0; k < arr.length; k++){
  if (arr[k].length < minimumsebelumnya) {
    minimumsebelumnya = arr[k].length    
  }
}
    return minimumsebelumnya
  }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2