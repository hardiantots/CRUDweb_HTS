const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'webcrud',
})

database.connect(err => {
    let message = !err ? 'connected' : 'connection failed';
    console.log(`mysql : ${message}`);
});

module.exports = database;