// Set up MySQL connection.
var mysql = require("mysql");

//DECLARING PORT
var PORT = process.env.PORT || 3306;

var connection;
//ADD this link to interact with JAWSDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({

    host: "localhost",
    port: PORT,
    user: "root",
    password: "root",
    database: "listing_db"
  });
}

// Error connecting to JAWSDB or localhost
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;
