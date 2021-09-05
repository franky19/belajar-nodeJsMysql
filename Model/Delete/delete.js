var db = require("../dbConfig");

db.connect(function(err) {
    if (err) throw err;
    
    // kita akan menghapus Starbucks
    let sql = `DELETE FROM customers WHERE id=12`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records delete: " + result.affectedRows);
    });
});