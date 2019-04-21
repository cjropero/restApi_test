const API_BASE = "/api";
const DB = require("../db");

module.exports = (app) => {
  app.get(`${API_BASE}/users`, (req, res) => {
    const query = DB.getUsers();
     res.json(query);
  })
  app.get(`${API_BASE}/user/:id`, (req, res) => {
    const query = DB.getUserById(req.params.id);
    res.json(query);
  });
}