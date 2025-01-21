const express = require('express'); // Express for the server
const mysql = require('mysql2');   // MySQL client for database
const dotenv = require('dotenv');  // For environment variables

dotenv.config(); // Load .env file

const app=express();
const port=process.env.port || 3000;

const db=mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

});
db.connect((err)=> {
    if(err){
        console.error('database coneection failed:',err.message);
        return;
    }
    console.log('connected to mysql database:');
})

//route
app.get('/',(req,res)=>{
    res.send('welcome to express.js server');
});

//server
app.listen(port,()=> {
    console.log('server is running')
});

