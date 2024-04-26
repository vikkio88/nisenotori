import { removeCurrentRomaji } from "../../libs/data/charSets";
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

export const GUESS_GAME_TYPES_LABELS = {
    [GUESS_GAME_TYPES.SYLLABLES]: 'Syllables',
    [GUESS_GAME_TYPES.AUDIO]: 'Audio',
    [GUESS_GAME_TYPES.COMBO_ALL]: 'Audio & Syllables',
};

export const guessGameTypes = Object.values(GUESS_GAME_TYPES).map((g) => ({ value: g, label: GUESS_GAME_TYPES_LABELS[g] }));

export function getNewGuessingSet({ charset, options, gameType, picks }) {
    const guessType = (GUESS_TYPES_MAP[gameType] || [gameType]).sort(byRandom)[0];

    //TODO: add way to handle combo
    let kata = randomKata(charset);
    const chars = picks.filter(removeCurrentRomaji(kata));
    chars.sort(byRandom);
    let possibleKatas = [...chars.slice(0, options - 1), kata.romaji];
    possibleKatas.sort(byRandom);

    return { kata, possibleKatas, guessType };
}