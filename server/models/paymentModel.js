const mongoose = require('mongoose');

// Define the payment Schema
const paymentSchema = mongoose.Schema({
  // Reference to the user making the payment (either Farmer or Worker)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    refPath: 'onModel',
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Farmer', 'Worker'], // Restrict to these two model types
  },
  // Payment details
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String},
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },

  // Payment status
  isPaid: {
    type: Boolean,
    require: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
},
{
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
}
);

// Create the Payment Model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;