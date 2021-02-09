const app  = require('express')();
const mysql = require('mysql');
let connectionObj;
var connect = mysql.createConnection({
    host     : 'localhost',									
    user     : 'root',
    password : '',
    database : 'my_db'
  });

app.get('/insert',(req,res,next)=>{
    var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
    //Inserting a record into details
   connection.query(insert_R,['rejii',24], function(err,res){
    if(err) throw err;
    else {
        console.log('Details added successfully');
    }
  });
});


app.get('/readdata',(req,res,next)=>{
    var read_R = 'SELECT * FROM details';
    connection.query(read_R, function(err, data){
        if(err) throw err;
        else {
            console.log(data);
        }
      });
});

app.get('/updatedata',(req,res,next)=>{
    var update_R = 'UPDATE details SET age = ? WHERE name=?';
    //Updating a record from details
  connection.query(update_R,[25,'regii'], function(err, res){
    if(err) throw err;
    else {
        console.log('Updated the age of regii !');
    }
  });
});

app.get('/deletedata',(req,res,next)=>{
    var delete_R = 'DELETE FROM details WHERE name=?';
    //Deleting a record from details
  connection.query(delete_R,['regii'], function(err, res){
    if(err) throw err;
    else {
        console.log('A record is removed !');
    }
  });
});

app.listen(3000,()=>{
    console.log(connected);
    connect.getConnection(function(err, connection){   
        connectionObj = connection;
        var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT,"+
        "name varchar(30) DEFAULT NULL,"+
        "age float(15) DEFAULT NULL,"+
        "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";
        connection.query(table,  function(err){
            if(err) throw err;
            else {
                console.log('Table created Successfully!');
            }
        });
    });
})