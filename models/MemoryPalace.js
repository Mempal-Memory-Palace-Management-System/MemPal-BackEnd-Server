const mongoose = require('mongoose');

const memoryPalaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  loci: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locus' }]
});

module.exports = mongoose.model('MemoryPalace', memoryPalaceSchema);
