module.exports = mongoose.model('ClassSchedule', new mongoose.Schema({
  studentId: String,
  instructorId: String,
  classTypeId: String,
  startTime: Date,
  endTime: Date
}));
