// import all named exports attached to a notesAPI object. this syntax can be helpful documenting where the methods come from
import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    // delegate the network requrest code to the notes-api.js API module which will ultimately return a JSON Web Token (JWT)
    const token = await notesAPI.createNote(noteData);
    // persist the 'token'
    localStorage.setItem('token', token);

    return getNotes();
}

export function getNotes() {
    return notesAPI.getNotes();
}