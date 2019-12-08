function cariModus(arr) {
    // you can only write your code here!
    var hasil = 0;
    var angkaSama = 0;
    for (var i = 0; i < arr.length; i++){
        var angkaSama2 = 0;
        for (var j = 0; j < arr.length; j++){
            if (arr[i]==arr[j] && i!==j){
                angkaSama2++;
                if (angkaSama2 > angkaSama){
                    angkaSama = angkaSama2
                    hasil = arr[i]
                }
            }
        }
    }
    if (angkaSama2 == 0){
        return -1
    }
    var angka = 0
    for (var k = 0;  k < arr.length; k++){
    angka += arr[k]
    if (angka/arr.length == arr[k]){
        return -1
    }
    }

    return hasil
}

  



  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 4, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5, 4])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

