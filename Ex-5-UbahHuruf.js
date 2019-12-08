function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf  = ''
    var huruf2 = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < kata.length; i++){
        for (var j = 0; j<huruf2.length;j++){
            if (kata[i]==huruf2[j]) {huruf += huruf2[j+1];
            }
        }            
    }
    return huruf
}

  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu