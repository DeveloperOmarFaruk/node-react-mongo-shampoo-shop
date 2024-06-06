const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const admin = require("firebase-admin");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Firebase
const serviceAccount = require("./shampoo-shop-14d94-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyToken(req, res, next) {
  if (req.headers?.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedUser = await admin.auth().verifyIdToken(token);
      req.decodedEmail = decodedUser.email;
    } catch {}
  }
  next();
}

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

    // ==========================
    // Users Admin GET API Method
    // ==========================

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    // ==========================
    // Users GET API Method
    // ==========================

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // ===============================
    // User POST API method
    // ===============================

    app.post("/users", async (req, res) => {
      const addUsers = req.body;
      const result = await usersCollection.insertOne(addUsers);
      res.json(result);
    });

    // ==========================
    // Users Admin PUT API Method
    // ==========================
    app.put("/users/admin", verifyToken, async (req, res) => {
      const user = req.body;
      const requester = req.decodedEmail;
      if (requester) {
        const requesterAcount = await usersCollection.findOne({
          email: requester,
        });
        if (requesterAcount.role === "admin") {
          const filter = { email: user.adminEmail };
          const updateDoc = {
            $set: {
              role: "admin",
            },
          };

          const result = await usersCollection.updateOne(filter, updateDoc);
          res.json(result);
        }
      } else {
        res
          .status(403)
          .json({ message: "You do not have access to make Admin" });
      }
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
