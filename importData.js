const playersData = require('./players.json')

// host、user、password 請更換成自己的
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dimerco76152",
    database: "nba",
    insecureAuth : true,
    port: 3307
});

con.connect();



let sql = `insert ignore into employee values?`;

let values = [];

//an empty array and push the data in to values array using for loop.
//I have already created a table "Employee" with column name which is I am pushing //Data in same Manner.Note :- (Remember While Pushing data which will same Order as Your table column name)

//for loop is running till the length of theplayersData;

for (let i = 0; i <playersData.length; i++) {
  values.push([playersplayersData[i].Email,playersData[i].EmployeeId,playersData[i].Firstname,playersData[i].Lastname,playersData[i].Department,playersData[i].Location])
}

//Now Running the query (here con is a variable of database );

con.query(sql, [values], (err, result) => {
  if (err) throw err;
  console.log("rows affected " + result.affectedRows);
});