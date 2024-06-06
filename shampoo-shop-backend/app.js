const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crud-mongodb.bkqhhcm.mongodb.net/?retryWrites=true&w=majority&appName=crud-mongodb`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect to the "shampooShopDB" database and access its collections
    const database = client.db("shampooShopDB");
    const usersCollection = database.collection("users");

    // ===============================
    // User POST API method
    // ===============================

    app.post("/users", async (req, res) => {
      const addUsers = req.body;
      const result = await usersCollection.insertOne(addUsers);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(
    "Hi, I'm a Node js server. Now, I'm working... Please don't disturbe me!"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
