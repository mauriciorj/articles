import * as functions from 'firebase-functions';
const express = require('express');

const app = express();
app.get('/timestamp', (request: any, response: any) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send(`${Date.now()}`);
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.app = functions.https.onRequest(app);
