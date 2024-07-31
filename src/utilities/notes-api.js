import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getNotes() {
    return sendRequest(BASE_URL);
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function createNote(note) {
    console.log('Creating note with payload:', note);
    // return sendRequest(BASE_URL, 'POST', note);
    const response = await sendRequest(BASE_URL, 'POST', note);
    console.log('Response from server:', response);
    return response;
}