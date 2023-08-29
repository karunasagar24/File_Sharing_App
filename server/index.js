// import express from 'express';
// import cors from 'cors';
// import router from './routes/routes.js';
// import DBConnection from './database/db.js';
// import dotenv from 'dotenv';
// const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes.js");
// const morgan = require("morgan");
const dotenv = require("dotenv");
// const colors = require("colors");
// const path = require("path");
const DBConnection = require("./database/db.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));