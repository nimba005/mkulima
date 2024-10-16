const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/farmerController");
const { protect } = require('../middlewares/authMiddleware');

route.get('/', protect, farmerController.getAllFarmers);
route.post('/', protect, farmerController.createFarmer);
router.get('/:id', protect, farmerController.getFarmerById);
router.put('/:id', protect, farmerController.updateFarmer);
router.delete('/:id', protect, farmerController.deleteFarmer);

module.exports = router;