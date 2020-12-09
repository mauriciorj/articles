require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('../../firebaseCredentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASEURL
});

const db = admin.database();

module.exports = db;