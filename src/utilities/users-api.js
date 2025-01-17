import sendRequest from "./send-request";
// this is the base path of the Express route we'll define
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
