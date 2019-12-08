function cariMedian(arr) {
    // you can only write your code here!
    var hasil = 0
    // var str = ""
    for (var i = 0; i < arr.length; i++){
        var half = arr.length/2
        if (arr.length %2==0) {
            return hasil = (arr[half-1] + arr[half])/2
        }
        else if (arr.length %3==0 || arr.length %5==0 || arr.length %7==0) {
            return hasil = arr[Math.floor(half)]
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5