const API_URL = "/assets/data";

let token = null;

export function basicHeaders(additional = {}) {

    if (Boolean(token)) {
        additional = {
            ...additional,
            Authorization: token,
        };
    }
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...additional
    };
}


export function get(api, headers = {}) {
    return fetch(`${API_URL}/${api}`, { method: "GET", headers: { ...basicHeaders(), ...headers } }).then(resp => resp.json());
}

export function loadWords() {
    return get('words.json');
}