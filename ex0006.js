function reducingCount(n) {
  if (n === 0) return;
  console.log(n);
  reducingCount(--n);
}

reducingCount(20);
