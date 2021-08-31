import express from "express";
import cors from 'cors';
import routerRegister from "./src/register/register.router.js";
import routerLogin from "./src/login/login.router.js";
import routerUser from './src/user/user.router.js';

const port = 5555;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", routerRegister);
app.use("/login", routerLogin);
app.use('/user', routerUser);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
