import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotes, createNote } from "../../utilities/notes-api";
import NotePageItem from "../NotePageItem/NotePageItem";
import AddNote from "../../components/AddNote/AddNote";

export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    useEffect(function () {
        async function grabNotes() {
            const grabbedNotes = await getNotes();
            setNotes(grabbedNotes);
        }
        grabNotes();
    }, []);

    async function handleAddNote(text) {
        const newNote = await createNote({ text });
        setNotes([newNote, ...notes]);
    }

    return (
        <div>
            <Link to="/notes/new">Add Note</Link>
            <AddNote handleAddNote={handleAddNote} />
            {notes.length === 0 ?
                <p>No Notes Yet!</p>
                :
                notes.map(function (note) {
                    return <NotePageItem key={note._id} note={note} />
                })
            }
        </div>
    );
}
