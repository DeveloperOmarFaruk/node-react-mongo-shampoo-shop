const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const admin = require("firebase-admin");
const app = express();
const port = process.env.PORT || 5000;

// Stripe Payment Gateway
const stripe = require("stripe")(`${process.env.DB_STRIPE_SECRET_KEY}`);
const FRONTEND_DOMAIN = "https://shampoo-shop.netlify.app";

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
    const productsCollection = database.collection("products");
    const tempOrderCollection = database.collection("tempOrder");
    const orderCollection = database.collection("orders");
    const contactUsCollection = database.collection("contactUs");

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

    // ==========================
    // Products GET API Method
    // ==========================

    app.get("/products", async (req, res) => {
      const cursor = productsCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // =====================================
    // Appoinments Single Data GET API Method
    // =====================================
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    // ===============================
    // Products POST API method
    // ===============================

    app.post("/products", async (req, res) => {
      const addProducts = req.body;
      const result = await productsCollection.insertOne(addProducts);
      res.json(result);
    });

    // ==========================
    // Doctors PUT API Method
    // ==========================
    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updateProductData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          productImage: updateProductData.productImage,
          productCategory: updateProductData.productCategory,
          productTitle: updateProductData.productTitle,
          productDescription: updateProductData.productDescription,
          productPrice: updateProductData.productPrice,
          productDiscount: updateProductData.productDiscount,
          productDiscountPrice: updateProductData.productDiscountPrice,
        },
      };

      const result = await productsCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    // ===============================
    // Products DELETE API method
    // ===============================

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.json(result);
    });

    // ===============================
    // Temporary Order GET API method
    // ===============================

    app.get("/temporaryOrder", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = tempOrderCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // =====================================
    // Temporary Order GET by ID API method
    // =====================================

    app.get("/temporaryOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tempOrderCollection.findOne(query);
      res.send(result);
    });

    // =====================================
    // Temporary Order PUT by email API method
    // =====================================
    app.put("/temporaryOrder", verifyToken, async (req, res) => {
      const email = req.query.email;
      const shippingsData = req.body;
      const filter = { email: email };
      // const options = { upsert: true };
      const updateDoc = {
        $set: {
          shippingsData: shippingsData,
        },
      };
      const result = await tempOrderCollection.updateMany(filter, updateDoc);
      res.json(result);
    });

    // ===============================
    // Temporary Order POST API method
    // ===============================
    app.post("/temporaryOrder", async (req, res) => {
      const addTempOrder = req.body;
      const result = await tempOrderCollection.insertOne(addTempOrder);
      res.json(result);
    });

    // =====================================
    // Temporary Order DELETE API method
    // =====================================
    app.delete("/temporaryOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tempOrderCollection.deleteOne(query);
      res.json(result);
    });

    // ===========================================
    // Temporary Order Multiple DELETE API method
    // ===========================================
    app.delete("/temporaryOrder", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await tempOrderCollection.deleteMany(query);
      res.json(result);
    });

    // ===============================
    // Order GET API method
    // ===============================

    app.get("/orders", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = orderCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // ===============================
    // Order GET Admin API method
    // ===============================

    app.get("/order/admin", async (req, res) => {
      const cursor = orderCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // =====================================
    // Order GET Admin by ID API method
    // =====================================

    app.get("/order/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.findOne(query);
      res.send(result);
    });

    // ===============================
    //  Order POST API method
    // ===============================
    app.post("/orders", async (req, res) => {
      const addOrder = req.body;
      const result = await orderCollection.insertOne(addOrder);
      res.json(result);
    });

    // ==========================
    // Contact Us GET API Method
    // ==========================
    app.get("/contactUs", async (req, res) => {
      const result = await contactUsCollection.find({}).toArray();
      res.send(result);
    });

    // ================================
    // Contact Us Single GET API Method
    // =================================

    app.get("/contactUs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contactUsCollection.findOne(query);
      res.send(result);
    });

    // ==========================
    // Contact Us POST API Method
    // ==========================
    app.post("/contactUs", async (req, res) => {
      const addContactUs = req.body;
      const result = await contactUsCollection.insertOne(addContactUs);
      res.json(result);
    });

    // ==========================
    // Contact Us DELETE API Method
    // ==========================
    app.delete("/contactUs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await contactUsCollection.deleteOne(query);
      res.json(result);
    });

    // =====================================
    // Stripe POST API method
    // =====================================
    app.post("/create-checkout-session", async (req, res) => {
      const stripeData = req.body;
      const orderProducts = stripeData.orderProducts;
      const totalPay = stripeData.totalPay;
      const email = stripeData.email;

      // const lineItems = orderProducts.map((item) => ({
      //   price_data: {
      //     currency: "inr",
      //     product_data: {
      //       name: item.productTitle,
      //     },
      //     unit_amount: item.productTotalAmount * 100,
      //   },
      //   quantity: item.productQuantity,
      // }));

      const lineItems = [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Total Amount",
            },
            unit_amount: totalPay * 100,
          },
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        customer_email: email,
        mode: "payment",
        success_url: `${FRONTEND_DOMAIN}/success`,
        cancel_url: `${FRONTEND_DOMAIN}/cart`,
      });

      res.json({ id: session.id });
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
