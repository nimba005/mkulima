const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/farmerController");
const { project } = require('../middlewares/authMiddleware');

