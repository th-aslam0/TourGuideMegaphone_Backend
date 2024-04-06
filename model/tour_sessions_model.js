const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  country: String,
  city: String,
  tourTitle: String,
  tourDescription: String,
  tourStartDateTime: String,
  tourDuration: Number,
  price: Number,
  tourGuideEmail: String
});
const TourSession = mongoose.model('TourSession', Schema);
module.exports = TourSession;
