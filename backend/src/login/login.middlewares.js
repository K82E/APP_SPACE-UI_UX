import jwt from "jsonwebtoken";
import { secret } from "./login.secret.js";

export const validateJWTAuth = (req, res, next) => {
  const headerAuth = req.get("Authorization");

  const jwtToken = headerAuth?.split(" ")[1];

  try {
    const jwtDecoded = jwt.verify(jwtToken, secret);
    req.email = jwtDecoded.user;
    next();
  } catch (err) {
    res.status(401).send();
  }
};
