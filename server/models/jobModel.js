const mongoose = require('mongoose');
const { execPath } = require('process');
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },

  city: {
    type: String,
    required: [true, 'Please enter a city']
  },
  state: {
    type: String,
    required: [true, 'Please enter a state']
  },
  phone: {
    type: String,
    required: [true, 'Please enter a phone number']
  },
  email: {
    type: String,
    required: [true, 'Please enter an email address']
  },
  pay: {
    type: Number,
    required: [true, 'Please enter a pay rate']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  application: [
    {
      userId: String,
      name: String,
      contactInfo: String,
      experience: String,

      // Other application properties...
    }
  ],
  status: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'pending', // Default status is 'pending'
  },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;