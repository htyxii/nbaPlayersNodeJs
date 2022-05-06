const playersData = require('./players.json')
var mysql = require('mysql');

// host/user/password
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dimerco76152",
    database: "nba",
    insecureAuth : true,
    port: 3307
});

con.connect();



let sql = `insert ignore into players values?`;

let values = [];

//an empty array and push the data in to values array using for loop.
//I have already created a table "Employee" with column name which is I am pushing //Data in same Manner.Note :- (Remember While Pushing data which will same Order as Your table column name)

//for loop is running till the length of theplayersData;

for (let i = 0; i <playersData.length; i++) {
  values.push([
      i,
      playersData[i].name,
      playersData[i].team_acronym,
      playersData[i].team_name,
      playersData[i].games_played,
      playersData[i].minutes_per_game,
      playersData[i].field_goals_attempted_per_game,
      playersData[i].field_goals_made_per_game,
      playersData[i].field_goal_percentage,
      playersData[i].free_throw_percentage,
      playersData[i].three_point_attempted_per_game,
      playersData[i].three_point_made_per_game,
      playersData[i].three_point_percentage,
      playersData[i].points_per_game,
      playersData[i].offensive_rebounds_per_game,
      playersData[i].defensive_rebounds_per_game,
      playersData[i].rebounds_per_game,
      playersData[i].assists_per_game,
      playersData[i].steals_per_game,
      playersData[i].blocks_per_game,
      playersData[i].turnovers_per_game,
      playersData[i].player_efficiency_rating,
    ])
}

//Now Running the query (here con is a variable of database );

con.query(sql, [values], (err, result) => {
  if (err) throw err;
  console.log("rows affected " + result.affectedRows);
});