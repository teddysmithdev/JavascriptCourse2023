let users = [
  { name: "teddy" },
  { name: "tina" },
  { name: "toad man" }
];

let user;

for(let i = 0; i < users.length; i++) {
  if(users[i].name === "teddy") {
    user = users[i];
    break;
  }
}

console.log(user);


users.find(function(user) {
  return user.name === "teddy";
})