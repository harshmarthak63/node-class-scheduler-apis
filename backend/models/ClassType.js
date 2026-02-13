module.exports = mongoose.model('ClassType', new mongoose.Schema({
  classTypeId: { type: String, unique: true }
}));
