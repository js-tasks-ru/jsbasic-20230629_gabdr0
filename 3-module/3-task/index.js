function camelize(str) {
  const arr = str.split('-');
  const tmp = arr.map((item, index) => {
    if(index === 0) {
      return item;
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  });
  return tmp.join("");
}
