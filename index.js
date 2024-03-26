const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const UserController = require('./controller/user_controller');
mongoose
  .connect(
    'mongodb+srv://aslamt:U908yfdJYp3BAZay@cluster0.2nlimt4.mongodb.net/TourGuideMegaPhone?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(function () {
    console.log('Db connected');
  })
  .catch(function () {
    console.log('DB not connected');
  });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: 'TourGuideMegaphone Backend is up',
  });
});
app.post('/signup', express.json(), UserController.signup);
app.post('/login', UserController.signin);
app.listen(PORT, function () {
  console.log('server running on PORT', PORT);
});
