function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const users = new Map();

users.set("João", "Client");
users.set("Pedro", "Admin");
users.set("Luiz", "Admin");
users.set("Maria", "Client");
users.set("Antônia", "Client");

console.log(getAdmins(users));
