const mongoose = require('mongoose');

module.exports = mongoose.model('Student', new mongoose.Schema({
  studentId: { type: String, unique: true }
}));
