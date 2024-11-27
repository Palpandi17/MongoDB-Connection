const express = require('express');

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connectDB = await mongoose.connect(
            'mongodb://localhost:27017/Mern', 
        );
        console.log(`MongoDB Connected Successfully`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;