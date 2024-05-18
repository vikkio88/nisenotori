import { ALL_SYLLABLES } from "./data/charSets";
import { KATA_MAP } from "./data/kataMap";
export function randomChar(charset = ALL_SYLLABLES) {
    return charset[Math.floor(Math.random() * charset.length)];
}

export function randomKata(charset = ALL_SYLLABLES) {
    return KATA_MAP[randomChar(charset)];
}