import express from "express";
import { createUserController } from "./register.controllers.js";
import { validateUser } from "./register.middlewares.js";

const routerRegister = express.Router();

routerRegister.route("/").post(validateUser, createUserController);

export default routerRegister;
