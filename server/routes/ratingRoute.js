const router = require('express').Router();
const ratingController = require('../controllers/ratingController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, ratingController.getAllRatings);
router.post('/', protect, ratingController.createRating);
//router.get('/:id', protect, ratingController.getFarmerRatings);
//router.get('/worker/:id', ratingController.getWorkerRatings);
//router.get('/farmer/:id/average', ratingController.getFarmerRatings);
//route.get('/worker/:id/average', ratingController.getWorkerAverageRating);
//route.get('/farmer/:id/total', ratingController.getFarmerTotalRating);
//route.get('/worker/:id/total', ratingController.getWorkerTotalRating);
router.put('/:id', protect, ratingController.updateRating);
router.delete('/:id', protect, ratingController.deleteRating);

module.exports = router;