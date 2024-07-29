const Note = require('../../models/note');

module.exports = {
    getNotes,
    createNote,
};

async function getNotes(req, res) {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

async function createNote(req, res) {
    try {
        const newNote = new Note({
            text: req.body.text,
            user: req.user.id,
        });
        const note = await newNote.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


