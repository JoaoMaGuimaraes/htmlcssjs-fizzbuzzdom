let container = document.getElementById("container"); // CONTAINER VARIABLE - GET BY ID HTML

for (let i = 1; i <= 100; i++) {
  //INCREMENT I UNTIL 100
  if(i % 3 == 0 && i % 15 == 0) { 
    // The index boxes divisible by 3 and by 15 must print the FizzBuzz
    container.innerHTML += '<div class="square fizzbuzz">fizzbuzz</div>';
  } else if (i % 3 == 0) {
    // The index boxes divisible by 3 must print the fizz string
    container.innerHTML += '<div class="square fizz">fizz</div>';
  } else if (i % 5 == 0) {
    // The index boxes divisible by 5 must print the buzz string
    container.innerHTML += '<div class="square buzz">buzz</div>';
  } else {
    // Boxes that do not respect any of the above rules must print the numerical index
    container.innerHTML += '<div class="square">' + i + "</div>";
  }
}
