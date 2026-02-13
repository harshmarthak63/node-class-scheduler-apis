module.exports = mongoose.model('Instructor', new mongoose.Schema({
  instructorId: { type: String, unique: true }
}));
