const TourSession = require('../model/tour_sessions_model');

// Create a new tour session
async function postTour(req, res) {
  try {
    const tourSession = await TourSession.create(req.body);
    res.status(201).json(tourSession);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Get all tour sessions
async function getAllTours(req, res) {
  try {
    const tourSessions = await TourSession.find();
    res.json(tourSessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all tour sessions
async function getAllToursByEmail(req, res) {
  try {
    const tourSessions = await TourSession.find({tourGuideEmail: req.body.tourGuideEmail});
    res.json(tourSessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a single tour session by ID
async function getTour(req, res) {
  try {
    const tourSession = await TourSession.findById(req.params.id);
    if (!tourSession) {
      return res.status(404).json({ error: 'Tour session not found' });
    }
    res.json(tourSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update a tour session by ID
async function putTour(req, res) {
  try {
    const tourSession = await TourSession.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tourSession) {
      return res.status(404).json({ error: 'Tour session not found' });
    }
    res.json(tourSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a tour session by ID
async function removeTour(req, res) {
  try {
    const tourSession = await TourSession.findByIdAndDelete(req.params.id);
    if (!tourSession) {
      return res.status(404).json({ error: 'Tour session not found' });
    }
    res.json({ message: 'Tour session deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  postTour,
  getAllTours,
  getTour,
  putTour,
  removeTour,
  getAllToursByEmail
};
