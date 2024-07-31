const Note = require('../../models/note');

module.exports = {
    getNotes,
    createNote,
};

async function getNotes(req, res) {
    try {
        const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

async function createNote(req, res) {
    try {
        console.log('Request body:', req.body);
        console.log('User:', req.user);
        const newNote = new Note({
            text: req.body.text,
            user: req.user._id,
        });
        const note = await newNote.save();
        console.log('Created note:', note);
        res.json(note);
    } catch (err) {
        console.error('Error creating note:', err.message);
        res.status(500).send('Server Error');
    }
};


