const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const UserController = require('./controller/user_controller');
const TourSessionController = require('./controller/tour_sessions_controller');


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

// Routes for CRUD operations
// Create a new tour session
app.post('/tours', TourSessionController.postTour);

// Get all tour sessions
app.get('/tours', TourSessionController.getAllTours);

// Get a single tour session by ID
app.get('/tours/:id', TourSessionController.getTour);

// Update a tour session by ID
app.put('/tours/:id', TourSessionController.putTour);

// Delete a tour session by ID
app.delete('/tours/:id', TourSessionController.removeTour);


app.listen(PORT, function () {
  console.log('server running on PORT', PORT);
});
