// import express from 'express';
// import upload from '../utils/upload.js';
const express = require("express");
const upload = require("../utils/upload.js"); 
const {uploadImage, getImage } = require("../controller/image-controller.js");
// import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

// export default router;
module.exports = router;