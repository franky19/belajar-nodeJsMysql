// var mysql = require('mysql');

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// module.exports = db;

var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petani_kopi"
});


module.exports = db;