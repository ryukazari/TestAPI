const mysql = require('mysql');
const mysqlConnection =    mysql.createConnection({
                                host:'localhost',
                                user:'root',
                                password:'',
                                database:'company'
                            });

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('DB_Connection');
    }
});

module.exports = mysqlConnection;

