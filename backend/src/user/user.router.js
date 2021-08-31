import express from "express";
import { retrieveUserDataController } from "./user.controller.js";
import { validateJWTAuth } from "../login/login.middlewares.js";

const router = express.Router();

router.use(validateJWTAuth); //router middleware to validate JWT

router.route("/").get(retrieveUserDataController);

export default router;
