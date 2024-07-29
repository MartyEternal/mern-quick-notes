const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/notes
router.get('/', ensureLoggedIn, notesCtrl.getNotes);
// router.post('/', notesCtrl.create);
router.post('/', notesCtrl.createNote);

module.exports = router;