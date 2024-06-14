const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;

const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://gangadhar2820:Ganga2820@apepdcl.zxhcewu.mongodb.net/" +
  "?retryWrites=true&w=majority&appName=apepdcl";

const client = new MongoClient(URL);

app.get("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const dbName = "apepdclConsumers";
    const collectionName = "B232_CONSUMERS";
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.findOne({ SERVICE_NO: "000012" });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`server started successfully on port ${PORT}`);
});
