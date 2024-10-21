const router = require('express').Route();
const paymentController = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, paymentController.getAllPayments);
router.post('/', protect, paymentController.createPayment);
router.get('/:id', protect, paymentController.getPaymentById);
router.put('/:id', protect, paymentController.updatePaymentById);
router.delete('/:id', protect, paymentController.deletePaymentById);

module.exports = router;