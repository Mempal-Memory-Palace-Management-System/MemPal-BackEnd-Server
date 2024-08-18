const mongoose = require('mongoose');

const locusSchema = new mongoose.Schema({
  description: { type: String, required: true },
  position: { type: Number, required: true },
  memoryPalaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'MemoryPalace' }
});

module.exports = mongoose.model('Locus', locusSchema);
