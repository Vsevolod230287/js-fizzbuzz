// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for ( i = 1; i <= 100; i++) {
  // var print = document.getElementById('risultato').innerHTML += i;
  if(!(i%3)) {
    console.log("Fizz");
    // var print = document.getElementById('risultato').innerHTML += "Fizz";
  } else if (!(i%5)) {
    console.log("Buzz");
    // var print = document.getElementById('risultato').innerHTML += "Buzz";
  }else if ((!(i%3)) && (!(i%5))) {
    console.log("FizzBuzz");
    // var print = document.getElementById('risultato').innerHTML += "FizzBuzz";
  }else {
    console.log(i);
  }
}
