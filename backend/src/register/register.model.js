import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://test-user:Dmqh9J46ypwk6rxZ@bootcamp.3id3n.mongodb.net/iter-DDBB";

export const createUser = async (user) => {
  const newUser = {
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
    phone: user.phone,
  };

  const client = await MongoClient.connect(URL);

  await client
    .db("iter-DDBB")
    .collection("users")
    .insertOne(newUser);

  client.close();
};

export const isValidUser = async (email, password) => {
  const loginValue = {
    email: email,
    password: password,
  };

  const client = await MongoClient.connect(URL);

  const data = await client
    .db("iter-DDBB")
    .collection("users")
    .find(loginValue)
    .toArray();

  client.close();

  return data.length > 0;
};
