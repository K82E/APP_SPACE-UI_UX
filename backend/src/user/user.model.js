import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://test-user:Dmqh9J46ypwk6rxZ@bootcamp.3id3n.mongodb.net/iter-DDBB";

export const getUserDataByEmail = async (email) => {
  const loginValue = {
    email: email,
  };

  const client = await MongoClient.connect(URL);

  const data = await client
    .db("iter-DDBB")
    .collection("users")
    .findOne(loginValue);

  client.close();

  return data;
};
