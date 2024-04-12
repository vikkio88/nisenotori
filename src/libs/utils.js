import { KATA_MAP, ROMANJI_CHARS } from "./data/kataMap";
export function randomChar() {
    return Object.values(ROMANJI_CHARS)[
        Math.floor(Math.random() * Object.values(ROMANJI_CHARS).length)
    ];
}

export function randomKata() {
    return KATA_MAP[randomChar()];
}