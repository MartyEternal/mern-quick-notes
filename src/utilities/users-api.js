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

// export async function signUp(userData) {
//     // fetch uses an options object as a second arg to make requests other than basic GET requests, include data, headers, etc.
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // fetch requires data payloads to be stringified and assigned to a body property on the options object
//         body: JSON.stringify(userData)
//     });
//     // check if request was successful
//     if (res.ok) {
//         const token = await res.json();
//         // res.json() will resolve to the JWT
//         return token
//     } else {
//         throw new Error('Invalid Sign Up');
//     }
// }

// export async function login(credentials) {
//     // fetch uses an options object as a second arg to make requests other than basic GET requests, include data, headers, etc.
//     const res = await fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // fetch requires data payloads to be stringified and assigned to a body property on the options object
//         body: JSON.stringify(credentials)
//     });
//     // check if request was successful
//     if (res.ok) {
//         const token = await res.json();
//         // res.json() will resolve to the JWT
//         return token
//     } else {
//         throw new Error('Invalid Login');
//     }
// }
