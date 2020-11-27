const { Router } = require('express');
const router = Router();
// const admin = require('firebase-admin');
// const serviceAccount = require('../../firebaseCredentials.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.DATABASEURL
// });

// const db = admin.database();

// router.get('/', (req, res) => {
//     console.log('Index');
//     res.send('received');
// })

// router.get('/medium', (req, res) => {
//     const newInfo = {
//         source: 'Medium',
//         title: 'This is Title Test',
//         link: 'http://www.medium.com',
//         addedToDb: '2020-11-26T20:10:00Z'
//     }
//     db.ref('blogsInfo').push(newInfo)
// })

module.exports = router;