import { HIRAGANA, KATAKANA } from "../../libs/data/consts";
import { randomKata } from "../../libs/utils";
import { byRandom } from "./shared";

export const TYPING_GAMES = {
    KATAKANA, HIRAGANA
};

export function checkGuess(guess, { word }) {
    if (guess.length != word.syllables.length) {
        return false;
    }

    for (const i in word.syllables) {
        if (guess[i] != word.syllables[i]) {
            return false;
        }
    }

    return true;
}

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
    const guesses = [...new Set([...word.syllables, ...moreGuesses])].sort(byRandom);

    return { word, guesses };
}