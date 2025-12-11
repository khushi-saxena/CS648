var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var dbURL = "mongodb+srv://rucha:admin@cluster0.oe8znnp.mongodb.net/inventory?retryWrites=true&w=majority&appName=Cluster0";

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(dbURL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Product Model
var Product = mongoose.model("product", {
  id: Number,
  product: {
    productid: Number,
    category: String,
    price: Number,
    name: String,
    instock: Boolean,
  },
});

// Helper: Convert Array → Object keyed by id
function buildProductMap(products) {
  const map = {};
  products.forEach((p) => (map[p.id] = p));
  return map;
}

// GET ALL PRODUCTS
app.get("/product/get", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(buildProductMap(products));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// CREATE PRODUCT
app.post("/product/create", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    const products = await Product.find({});
    res.json(buildProductMap(products));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// UPDATE PRODUCT
app.put("/product/update/:id", async (req, res) => {
  try {
    await Product.updateOne({ id: req.params.id }, req.body);
    const products = await Product.find({});
    res.json(buildProductMap(products));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE PRODUCT
app.delete("/product/delete/:id", async (req, res) => {
  try {
    await Product.deleteOne({ id: req.params.id });
    const products = await Product.find({});
    res.json(buildProductMap(products));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// Start ONLY ONE server
var server = app.listen(3003, () => {
  console.log("Server is listening on port:", server.address().port);
});
