//const fireBaseDb = require('../fireBaseConfig');
const postgresDb = require("../postgresConfig");
const { v4: uuidv4 } = require('uuid');

//using firebase
// const newInfo = {
//     source: "Medium",
//     title: "This is Title Test",
//     link: "http://www.medium.com",
//     addedToDb: "2020-11-26T20:10:00Z",
//   };
//fireBaseDb.ref('blogsInfos').push(newInfo)

//using postgres
const text =
  'INSERT INTO blogs(uuid, source, title, link) VALUES ($1, $2, $3, $4) RETURNING *';
const values = [uuidv4(), 'medium', 'this is title test','http://www.medium.com'];
async function testInsert() {
  try {
    const res = await postgresDb.query(text, values);
    console.log(res.rows);
  } catch (err) {
    console.log(err.stack);
  }
  postgresDb.end();
}

testInsert();
