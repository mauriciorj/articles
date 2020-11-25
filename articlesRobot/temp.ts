import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/Myapi", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

const db = admin.firestore();
export const webApi = functions.https.onRequest(main);

interface Articles {
  header: string;
  source: string;
  url: string;
}

app.post("/blogAddPost", async (req, res) => {
  const article: Articles = {
    header: "Header test",
    source: "Source test",
    url: "URL test",
  };

  await db.collection("blogsInfo").add(article);
});

app.get("/timestamp", (request: any, response: any) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send(`${Date.now()}`);
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.app = functions.https.onRequest(app);
