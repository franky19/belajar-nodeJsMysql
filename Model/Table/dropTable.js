var db = require("../dbConfig");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `drop TABLE customers`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});