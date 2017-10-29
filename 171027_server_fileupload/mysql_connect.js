var mysql = require("mysql");

var settings = {
    host : "localhost:3306/memo",
    user : "Richey",
    password : "gkstmdqja1!",
    port : "3306",
    database : "memo"
};

var con = mysql.createConnection(settings);
con.connect();
con.query("select * from memo", function(error, record_set, columns){
    record_set.array.forEach(function(record) {
        console.log(record);
    });
    this.end();     // 퀄 처리에 대한 연결 해제
});

con.end();