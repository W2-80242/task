const mysql = require('mysql2');
const express = require('express');
require('dotenv').config(); 
const app = express();
const  User  =  require('../models/user'); 
//const sequelize = require('../dbConnection'); 

const ConnectionDetails = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};


app.get('/users', async (request, response) => {
    try {
        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10;
        const offset = (page - 1) * perPage;

        // Fetch users with pagination using Sequelize
        const users = await User.findAll({
            attributes: ['first_name', 'last_name', 'phone_no', 'role', 'email'], // Select columns
            limit: perPage,  
            offset: offset    
        });

        // Count the total number of users for pagination info
        const total = await User.count();

        const totalPages = Math.ceil(total / perPage);

        const reply = {
            status: 'success',
            result: users,
            pagination: {
                page,
                perPage,
                total,
                totalPages
            }
        };

        response.setHeader('Content-type', 'application/json');
        response.json(reply);
    } catch (error) {
        response.setHeader('Content-type', 'application/json');
        response.status(500).json({ status: 'error', error: error.message });
    }
});

app.get('/users/:id', async (request, response) => {
    const userId = request.params.id;  

    try {
        // Fetch the user by ID using Sequelize
        const user = await User.findOne({
            attributes: ['first_name', 'last_name', 'email'],  
            where: {
                id: userId  
            }
        });

        // Check if user exists
        if (user) {
            const reply = {
                status: "success",
                result: user  
            };
            response.setHeader("Content-type", "application/json");
            response.json(reply);
        } else {
            const reply = {
                status: "error",
                message: "User not found"
            };
            response.setHeader("Content-type", "application/json");
            response.status(404).json(reply);  
        }
    } catch (error) {
        
        const reply = {
            status: "error",
            error: error.message
        };
        response.setHeader("Content-type", "application/json");
        response.status(500).json(reply);  
    }
});

app.post('/users/add', async (request, response) => {
    try {
        const { first_name, last_name, phone_no, role, email } = request.body;

        // Input validation (optional but recommended)
        if (!first_name || !last_name || !role || !email) {
            return response.status(400).json({
                status: 'error',
                message: 'Required fields are missing: first_name, last_name, role, email'
            });
        }

        // Save the user to the database using Sequelize
        const newUser = await User.create({
            first_name,
            last_name,
            phone_no,
            role,
            email
        });

        response.status(201).json({
            status: 'success',
            message: 'User created successfully',
            user: newUser
        });
    } catch (error) {
        response.status(500).json({
            status: 'error',
            message: 'Failed to create user',
            error: error.message
        });
    }
});


module.exports = app;
