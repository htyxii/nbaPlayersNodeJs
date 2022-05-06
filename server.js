// server.js

var mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
//將request進來的 data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// 監聽於 9999 端口
app.listen(9999, function () {
    console.log('Node app is running on port 9999');
});

// db

// host、user、password 請更換成自己的
var mc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dimerco76152",
    database: "nba",
    insecureAuth : true,
    port: 3307
});

mc.connect();

// 讀取

app.get('/all', function (req, res) {
    // 是為了修復 CORS 的問題而設
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    mc.query('SELECT * FROM players', function (error, results, fields) {
        //var result = JSON.parse(results);
        if (error) throw error;
        return res.send(results);
    });
});
