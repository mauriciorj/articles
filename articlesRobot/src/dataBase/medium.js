const db = require('./config');

const newInfo = {
    source: 'Medium',
    title: 'This is Title Test',
    link: 'http://www.medium.com',
    addedToDb: '2020-11-26T20:10:00Z'
}

db.ref('blogsInfo').push(newInfo)

