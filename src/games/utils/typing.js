import { HIRAGANA, KATAKANA } from "../../libs/data/consts";
import { randomKata } from "../../libs/utils";
import { byRandom } from "./shared";

export const TYPING_GAMES = {
    KATAKANA, HIRAGANA
};

export function getNextTypingQuiz(words, kana) {
    words.sort(byRandom);
    const word = words[0];
    if (word == undefined) {
        return { word };
    }
    const moreGuesses = [];
    for (const _ of word.syllables) {
        const k = randomKata();
        moreGuesses.push(k[kana]);
    }
    const guesses = [...word.syllables, ...moreGuesses];

    return { word, guesses };
}