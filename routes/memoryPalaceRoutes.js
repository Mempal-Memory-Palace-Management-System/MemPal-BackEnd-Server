const express = require('express');
const MemoryPalace = require('../models/MemoryPalace');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const palace = new MemoryPalace({ name, description, userId: req.user.id });
  await palace.save();
  res.status(201).json(palace);
});

router.get('/', async (req, res) => {
  const palaces = await MemoryPalace.find({ userId: req.user.id });
  res.json(palaces);
});

router.delete('/:id', async (req, res) => {
  await MemoryPalace.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
