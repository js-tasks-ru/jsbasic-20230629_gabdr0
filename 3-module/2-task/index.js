function filterRange(arr, a, b) {
  const tmp = arr.filter(number => {
    if(number >= a && number <= b) {
      return number;
    }
  })
  return tmp;
}
