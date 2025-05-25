// models/Video.js
const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
  title: String,
  url: String, // Hosted video URL (e.g., Cloudinary/S3)
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  uploadDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Video', videoSchema);
