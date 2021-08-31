import { isValidUser } from "./register.model.js";

export const validateUser = async (req, res, next) => {
  if (await isValidUser(req.body.email, req.body.password)) {
    res.status(409).send();
  } else {
    next();
  }
};
