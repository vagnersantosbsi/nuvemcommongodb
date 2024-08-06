// backend/index.js
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Permite que o frontend acesse o backend
app.use(express.json());

const usuario = "vagnersimoes";
const senha = "1EURpbKBgPudMM1r";

const uri = "mongodb+srv://vagnersimoes:1EURpbKBgPudMM1r@cluster0.nbt3sks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/connect', async (req, res) => {
  try {
    await client.connect();
  } catch (error) {
    res.status(500).send("Error connecting to MongoDB");
  } finally {
  }

  try {
    await client.db("admin").command({ ping: 1 });
    res.send("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    res.status(500).send("Error Client DB Admin do MongoDB");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
