var age;
age = 10;
console.log(age);
age = 20;
console.log(age);
/*VAR FOR ONE INPUT */ 
var ages = ["awalom", 20, "Aster", 40];
console.log(ages);
/*THIS IS AN ARRAY*/

document.getElementById("submit").addEventListener("click", function() {
  ages.push(document.getElementById("name").innerHTML);
  ages.push(document.getElementById("age").value);
  document.getElementById("display").innerHTML = ages;
});
/*WHEN YOU SUBMIT THE DATA OF NAME AND AGE WILL BE SAVED*/

function ageCheck() {
  var age = document.getElementById("age").value;
  if (age < 18) {
        document.getElementById("message").innerHTML ="<h1>YOU DUMBASS, YOU ARE TOO YOUNG!HHAHAHAH</h1>";
  }
  else {
    document.getElementById("message").innerHTML = "<h1>I GOT THE POWER, MUHAHAHAHH</h1>";
  }

}