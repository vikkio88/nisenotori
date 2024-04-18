import howler from 'howler';


export const SOUNDS = {
    BEEP: 'beep',
    BOBOP: 'bobop',
};

function createAudioPlayerInstance() {
    const beep = new howler.Howl({ src: 'assets/audio/sfx/beep.mp3' });
    const bobop = new howler.Howl({ src: 'assets/audio/sfx/bobop.mp3' });
    let playing = null;
    return {
        audios: { [SOUNDS.BEEP]: beep, [SOUNDS.BOBOP]: bobop },
        play(sound) {
            if (!Boolean(sound) || !Object.values(SOUNDS).includes(sound)) {
                console.error(`sound ${sound} not found.`);
                return;
            }

            if (playing && playing.playing()) {
                playing.stop();
            }
            playing = this.audios[sound];
            playing.play();

            playing.on("end", function () {
                playing = null;
            });
        },
        destroy() {
            Object.values(this.audios).forEach(a => a.unload());
        }
    };
}

export default createAudioPlayerInstance;