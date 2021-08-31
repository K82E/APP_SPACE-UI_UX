import { getUserDataByEmail } from "./user.model.js";

export const retrieveUserDataController = async (req, res) => {
    const userData = await getUserDataByEmail(req.email);
    delete userData.password;
    res.status(200).send(userData);
}