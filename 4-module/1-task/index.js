function makeFriendsList(friends) {
  const newFriends = friends.map( obj => `${obj.firstName} ${obj.lastName}` );
  const ul         = document.createElement("ul");

  for (const item of newFriends) {
    const li       = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  }
  return ul;
}
