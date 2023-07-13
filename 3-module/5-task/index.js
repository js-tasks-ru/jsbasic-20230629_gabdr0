function getMinMax(str) {
  let arr = str.split(" ");
  let tmp = arr.filter( item => Number(item) ).map( item => Number(item) );
  let obj = {};
  obj.min = Math.min(...tmp);
  obj.max = Math.max(...tmp);
  return obj;
}
