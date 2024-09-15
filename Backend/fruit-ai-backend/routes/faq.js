// routes/faq.js
const express = require('express');
const Faq = require("../models/faq.js");
const router = express.Router();

// GET /faqs - Get all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /faqs/:id - Get a single FAQ by ID
router.get('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (faq == null) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /faqs - Create a new FAQ
router.post('/', async (req, res) => {
  const faq = new Faq({
    question: req.body.question,
    answer: req.body.answer,
  });

  try {
    const newFaq = await faq.save();
    res.status(201).json(newFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /faqs/:id - Update an FAQ by ID
router.put('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (faq == null) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    if (req.body.question != null) {
      faq.question = req.body.question;
    }
    if (req.body.answer != null) {
      faq.answer = req.body.answer;
    }

    const updatedFaq = await faq.save();
    res.json(updatedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /faqs/:id - Delete an FAQ by ID
router.delete('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (faq == null) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    await faq.remove();
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
