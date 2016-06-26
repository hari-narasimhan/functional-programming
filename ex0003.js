// Return a function
function greaterThan(n) {
  return function (m) { return m > n; };
}

var greaterThan10 = greaterThan(10);

console.log(
  '9 is greater than 10 ' + greaterThan10(9),
  '|',
  '11 is greater than 10 ' + greaterThan10(11)
);

// Accept a function

function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even');
  });
});
