export class GameResult {
    #right = 0;
    #wrong = 0;
    #wrongRomaji = [];

    markWrong({ romaji = null } = {}) {
        this.#wrong++;
        if (romaji) {
            this.#wrongRomaji.push(romaji);
        }
    }

    markCorrect({ romaji = null } = {}) {
        this.#right++;
    }

    result() {
        return {
            total: this.#right + this.#wrong,
            correct: this.#right,
            wrong: this.#wrong,
            errors: this.#wrongRomaji
        };
    }
}