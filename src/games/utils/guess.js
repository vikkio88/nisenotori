import { ROMAJI_CHARS } from "../../libs/data/kataMap";
import { randomKata } from "../../libs/utils";

function byRandom() { return Math.random() - 0.5; }

export const GUESS_GAME_TYPES = {
    SYLLABLES: 'syllables',
    AUDIO: 'audio',
    COMBO_SYLLABLES: 'combo_syllables',
    COMBO_AUDIO: 'combo_syllables',
    COMBO: 'audio_syllables',
    COMBO_ALL: 'combo_all',
};

export function getNewGuessingSet(charset, options) {
    let kata = randomKata(charset);
    const chars = Object.values(ROMAJI_CHARS).filter(c => c != kata.romaji);
    chars.sort(byRandom);
    let possibleKatas = [...chars.slice(0, options - 1), kata.romaji];
    possibleKatas.sort(byRandom);
    return { kata, possibleKatas };
}