const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
const port = 3001; // Change this to your desired port

app.use(bodyParser.json());

const uri = "mongodb+srv://admin:nami123@cluster0.wa0mlxz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectDB();

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username and password" });
  }

  const db = client.db('catapp');
  const collection = db.collection('users');

  try {
    const user = await collection.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const payload = {
      username: user.username,
      hasSubscription: user.subscription // Include hasSubscription in the payload
    };
    const secretKey = process.env.JWT_SECRET_KEY || 'nami123'; // Use environment variable for secure storage
    const algorithm = 'HS256'; // Specify a secure signing algorithm
    // Generate JWT token
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }, algorithm);

    // Authentication successful
    return res.status(200).json({ message: "Login successful", token });

  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});