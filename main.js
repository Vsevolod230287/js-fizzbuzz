// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (i = 1; i <= 100; i++) {
  if (!(i % 3) && (!(i % 5))) {
    print = document.getElementById('risultato').innerHTML += "<div>" + "FizzBuzz"  + "</div>";
  } else if (!(i % 5)) {
    print = document.getElementById('risultato').innerHTML += "<div>" + "Buzz"  + "</div>";
  } else if (!(i % 3)) {
    print = document.getElementById('risultato').innerHTML += "<div>" + "Fizz"  + "</div>";
  } else {
    print = document.getElementById('risultato').innerHTML += "<div>" + i + "</div>";
  }
}
