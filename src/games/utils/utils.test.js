import { expect, test } from "vitest";
import { GameResult } from "./gameResult";
import { KATA_MAP, ROMAJI_CHARS } from "../../libs/data/kataMap";

test('GameResult builds and returns correct result.', () => {
    const gr = new GameResult();
    const wrongKata = KATA_MAP[ROMAJI_CHARS.A]

    expect(gr.result()).toEqual({
        total: 0,
        correct: 0,
        wrong: 0,
        errors: [],
    });

    gr.markCorrect();
    gr.markCorrect();
    gr.markCorrect();
    
    
    gr.markWrong(wrongKata);

    expect(gr.result()).toEqual({
        total: 4,
        correct: 3,
        wrong: 1,
        errors: [wrongKata.romaji],
    });

});