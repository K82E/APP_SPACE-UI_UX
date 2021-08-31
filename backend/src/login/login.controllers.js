import jwt from 'jsonwebtoken';
import {secret} from './login.secret.js';
import { getUserDataByEmail } from "../user/user.model.js";


export const loginJWTController = async (req, res) => {
  const {email, password} = req.body;

  const userData = await getUserDataByEmail(email);

  if(userData !== undefined && password === userData.password){
    const token = jwt.sign({user: email}, secret);
    res.send({
      access_token: token
    });
  } else {
    res.status(404).send();
  }
};
