var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Statements
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Expression
var print = function (p) { return console.log(p); };
array.forEach(print);
