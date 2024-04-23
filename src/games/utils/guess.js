import { ROMAJI_CHARS } from "../../libs/data/kataMap";
import { randomKata } from "../../libs/utils";

export const GUESS_GAME_TYPES = {
    SYLLABLES: 'syllables',
    AUDIO: 'audio',
    COMBO_SYLLABLES: 'combo_syllables',
    COMBO_AUDIO: 'combo_syllables',
    COMBO: 'audio_syllables',
    COMBO_ALL: 'combo_all',
};

export function getNewGuessingSet(charset) {
    let kata = randomKata(charset);
    const chars = Object.values(ROMAJI_CHARS).filter(c => c != kata.romaji);
    //TODO: shuffle
    let possibleKatas = [...chars.slice(0, 3), kata.romaji];
    return { kata, possibleKatas };
}