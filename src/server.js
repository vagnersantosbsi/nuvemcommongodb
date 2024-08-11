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
const senha = "m8yahOw6bRAdYFmN";

const uri = "mongodb+srv://vagnersimoes:m8yahOw6bRAdYFmN@cluster0.nbt3sks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



app.get('/connectMongoose', async (req, res) => {
  const connectComDatabase = () => {
    console.log("Aguardando por conexão na base de dados");

    mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
      .then(() => { 
        console.log("Conexão estabelecida com sucesso!"); 
        res.send("Pinged your deployment. You successfully connected to MongoDB! Com Mongoose");
      })
      .catch((error) => { 
        console.log(error);
        res.status(401).send("Error connecting to MongoDB");
       })
      ;

  };
  connectComDatabase();
  module.exports = connectComDatabase;
});

app.get('/connect', async (req, res) => {
  try {
    // const client = new MongoClient(uri, {
    //   serverApi: {
    //     version: ServerApiVersion.v1,
    //     strict: true,
    //     deprecationErrors: true,
    //   }
    // });

    const client = new MongoClient(uri, {
      useNewUrlParser: true, useUnifiedTopology: true
    });

    await client.connect();

    try {
      await client.db("admin").command({ ping: 1 });
      res.send("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      res.status(403).send("Error Client DB Admin do MongoDB");
    } finally {
      await client.close();
    }

  } catch (error) {
    res.status(401).send("Error connecting to MongoDB");
  } finally {
    // const database = client.db('your_database_name');
    // const collection = database.collection('your_collection_name');
    // const YourModel = mongoose.model('YourModelName', new mongoose.Schema({
    //   // Definir os campos do modelo
    // }));
  }


});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
