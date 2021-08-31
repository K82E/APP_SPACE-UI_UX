import { createUser } from "./register.model.js";

export const createUserController = (req, res) => {
  createUser(req.body);
  res.status(201).send();
};
