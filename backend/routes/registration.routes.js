const express = require('express');
const multer = require('multer');
const { processCSV } = require('../services/registration.service');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  const result = await processCSV(req.file.path);
  res.json(result);
});

module.exports = router;
