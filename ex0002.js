// Pure Functions

function square(x) {
  return x * x;
}

function squareAll(items) {
  return items.map(square);
}

// Impure Functions

function squarePlusOne(x) {
  x = x + 1;

  // Save x in database :: (side effect)
  // updateDb(x);

  return x * x;
};

function mutatedSquareAll(items) {
  for (var i = 1; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
