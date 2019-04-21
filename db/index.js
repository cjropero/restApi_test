const users = require("../resources/users");

module.exports = {
  getUsers: () => {return users},
  getUserById: (id) => {return users.filter(user=>user._id===id)}
}