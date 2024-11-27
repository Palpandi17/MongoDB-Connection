// mongodb+srv://Selva2805:<db_password>@cluster0.0kbxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db');

const app = express();

const PORT = 8080

app.listen(PORT, () => {
    console.log("Server is Running!");
})