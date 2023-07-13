function showSalary(users, age) {
  let tmp = users.filter( user => user.age <= age ).map( user => `${user.name}, ${user.balance}\n` );
  tmp[tmp.length - 1] = tmp[tmp.length - 1].substring(0, tmp[tmp.length - 1].length - 1);;
  return tmp.join("");
}
