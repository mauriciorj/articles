const functions = require('firebase-functions');
const admin = require ('firebase-admin');
const express = require ('express');
const bodyParser = require ('body-parser');

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/Myapi", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: true }));

const db = admin.firestore();

app.post("/blogAddPost", async (req, res) => {
  const article = {
    header: "Header test",
    source: "Source test",
    url: "URL test",
  };

  await db.collection("blogsInfo").add(article);
});
