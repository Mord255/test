const express = require("express");
const routes = express.Router();
const verifytoken = require("../app/Middleware/auth");
const UserController = require("../app/Controllers/UserController");

routes.post("/user/register", UserController.register);
routes.get("/user/getusers", UserController.getUsers);
routes.get("/user/getuser/:id_user", UserController.getUser);

module.exports = routes;