function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad = "abcdefghijklmnopqrstuvwxyz";
    var string = '';
    for (var j = 0; j < abjad.length; j++){         
    for (var i = 0; i < str.length; i++){
      if (abjad[j]==str[i]) {
        string += abjad[j]        
      }
    }
  }
  return string
}
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'