var db = require("../dbConfig");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM customers";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // gunakan perulangan untuk menampilkan data
        console.log(`ID \t NAME \t\t ADDRESS`);
        console.log(`----------------------------------------------------------`);
        result.forEach(customer => {
            console.log(`${customer.id} \t ${customer.name} \t ${customer.address}`);
        });
    });
});