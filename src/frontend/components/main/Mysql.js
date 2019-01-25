
var mysql = require('mysql');


var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "kriskringle"
});

// conn.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

var sql = "SELECT * FROM preferences;"

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
});