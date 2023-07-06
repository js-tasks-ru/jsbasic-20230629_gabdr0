function factorial(n) {
  let fact = 1;

  if(n === 0 || n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
