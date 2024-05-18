const ASSETS_URL = "/assets/data";

export function basicHeaders(additional = {}) {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...additional
    };
}

export function get(api, headers = {}) {
    return fetch(
        `${api}`,
        {
            method: "GET",
            headers: {
                ...basicHeaders(),
                ...headers
            }
        }
    );
}

export function getJsonAsset(file) {
    return get(`${ASSETS_URL}/${file}.json`).then(resp => resp.json());
}

export function loadWords() {
    return getJsonAsset('words');
}