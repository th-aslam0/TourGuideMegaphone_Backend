const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  tourCountry: String,
  tourCity: String,
  tourTitle: String,
  tourDescription: String,
  tourStartTime: String,
  tourDuration: Number,
  tourPrice: Number,
  tourGuideEmail: String
});
const TourSession = mongoose.model('TourSession', Schema);
module.exports = TourSession;
