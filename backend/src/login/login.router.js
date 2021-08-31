import express from "express";
import {loginJWTController} from './login.controllers.js';

const router = express.Router();

router.route("/").post(loginJWTController);

export default router;
