const express = require('express');
const Locus = require('../models/Locus');
const MemoryPalace = require('../models/MemoryPalace');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  const { description, position, memoryPalaceId } = req.body;
  const locus = new Locus({ description, position, memoryPalaceId });
  await locus.save();
  await MemoryPalace.findByIdAndUpdate(memoryPalaceId, { $push: { loci: locus._id } });
  res.status(201).json(locus);
});

router.delete('/:id', async (req, res) => {
  const locus = await Locus.findById(req.params.id);
  await MemoryPalace.findByIdAndUpdate(locus.memoryPalaceId, { $pull: { loci: locus._id } });
  await Locus.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
