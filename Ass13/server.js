// Load environment variables from .env file
require('dotenv').config();

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Use environment variable for MongoDB connection string
// Set MONGODB_URI in your .env file or environment
var dbURL = process.env.MONGODB_URI;

if (!dbURL) {
  console.error('ERROR: MONGODB_URI environment variable is not set!');
  console.error('Please create a .env file with your MongoDB connection string.');
  process.exit(1);
}

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

// GET ALL PRODUCTS (with trailing slash for assignment requirement)
app.get("/product/get/", async (req, res) => {
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
    // Generate ID if not provided (handles undefined, null, empty string, but allows 0)
    if (req.body.id === undefined || req.body.id === null || req.body.id === '') {
      const products = await Product.find({});
      const maxId = products.length > 0 
        ? Math.max(...products.map(p => p.id || 0))
        : -1;
      req.body.id = maxId + 1;
    }
    
    // Ensure numeric types
    if (req.body.product) {
      req.body.product.productid = Number(req.body.product.productid) || 0;
      req.body.product.price = Number(req.body.product.price) || 0;
      req.body.product.instock = Boolean(req.body.product.instock);
    }
    
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
    const productId = Number(req.params.id);
    
    // Ensure numeric types
    if (req.body.product) {
      req.body.product.productid = Number(req.body.product.productid) || 0;
      req.body.product.price = Number(req.body.product.price) || 0;
      req.body.product.instock = Boolean(req.body.product.instock);
    }
    
    await Product.updateOne({ id: productId }, { $set: req.body });
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
    const productId = Number(req.params.id);
    await Product.deleteOne({ id: productId });
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
