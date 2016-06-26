
function greetInSteps(name, age, location) {
  return console.log('Hello ' + name + ' you are ' + age + ' years and from ' + location);
}

greetInSteps('Sam', 21, 'New Delhi');

function curryGreet(name) {
  return function (age) {
    return function (location) {
      return console.log('Hello ' + name + ' you are ' + age + ' years and from ' + location);
    };
  };
}

curryGreet('Shankar')(25)('Bangalore');
