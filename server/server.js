const express = require('express');
const app = express();
const path = require('path');
const color = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');
const farmerRoutes = require('./routes/farmerRoutes');
const workerRoutes = require('./routes/workerRoutes');
const jobRoutes = require('./routes/jobRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const { error } = require('console');


connectDB();

app.use(express.json());

const corsOptions = {
  origin: "https://nimba005.github.io/mkulima",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use('/api/farmers', farmerRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/users', userRoutes);

//server frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
else
  {
    app.get('/', (req, res) => res.send("please set production"));
  }

  app.listen(port, () => console.log(`Example app listening on port ${port}!`.blue.bold));