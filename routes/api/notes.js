const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesCtrl.getNotes);
router.post('/', ensureLoggedIn, notesCtrl.createNote);

module.exports = router;