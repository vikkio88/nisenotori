import { ROMAJI_CHARS } from "../../libs/data/kataMap";
import { randomKata } from "../../libs/utils";

function byRandom() { return Math.random() - 0.5; }

export const GUESS_GAME_TYPES = {
    SYLLABLES: 'syllables',
    AUDIO: 'audio',
    // COMBO_SYLLABLES: 'combo_syllables',
    // COMBO_AUDIO: 'combo_syllables',
    // COMBO: 'audio_syllables',
    COMBO_ALL: 'combo_all',
};

export const GUESS_TYPES_MAP = {
    [GUESS_GAME_TYPES.COMBO_ALL]: [
        GUESS_GAME_TYPES.SYLLABLES,
        GUESS_GAME_TYPES.AUDIO,
        // GUESS_GAME_TYPES.COMBO_SYLLABLES,
        // GUESS_GAME_TYPES.COMBO_AUDIO
    ],
};

export function getNewGuessingSet(charset, options, gameType) {
    const guessType = (GUESS_TYPES_MAP[gameType] || [gameType]).sort(byRandom)[0];

    //TODO add way to handle combo
    let kata = randomKata(charset);
    const chars = Object.values(ROMAJI_CHARS).filter(c => c != kata.romaji);
    chars.sort(byRandom);
    let possibleKatas = [...chars.slice(0, options - 1), kata.romaji];
    possibleKatas.sort(byRandom);

    return { kata, possibleKatas, guessType };
}