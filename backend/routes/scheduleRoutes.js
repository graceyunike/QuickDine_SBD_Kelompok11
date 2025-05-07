const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// CREATE schedule
router.post('/', async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).json(schedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE schedule
router.put('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(schedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE schedule
router.delete('/:id', async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Schedule deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT schedule
router.put('/:id', async (req, res) => {
    try {
      const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedSchedule) {
        return res.status(404).json({ message: 'Schedule not found' });
      }
      res.status(200).json(updatedSchedule);  // Mengembalikan data yang sudah diperbarui
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
module.exports = router;
