var greeting = 'Hello, Spiderman';

var greetMe = function () {
  console.log(greeting);
};

greetMe();

function greetingGenerator() {
  var name = 'Hello, Superman';

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var greeter = greetingGenerator();
greeter();
