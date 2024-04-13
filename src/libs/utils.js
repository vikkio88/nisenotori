import { ALL_SYLLABALES } from "./data/charSets";
import { KATA_MAP } from "./data/kataMap";
export function randomChar(charset = ALL_SYLLABALES) {
    return charset[Math.floor(Math.random() * charset.length)];
}

export function randomKata(charset = ALL_SYLLABALES) {
    return KATA_MAP[randomChar(charset)];
}