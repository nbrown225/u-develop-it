const express = require('express');
// port designation
const PORT = process.env.PORT || 3001;
const app = express();

// connect sql database
const mysql = require('mysql2');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get test route
app.get('/', (req,res) => {
    res.json({
        message: 'WHATS UP DOC?'
    })
});

//default response for not found requests
app.use((req, res) => {
    res.status(404).end();
})

//connect to sql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your sql password
        password: 'zulubravokilo383',
        database: 'election'
    },
    console.log('CONNECTING TO ELECTION DATABASE.......PROCESSING.....PROCESSING!!!')
);

//start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})