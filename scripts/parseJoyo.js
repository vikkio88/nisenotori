import fs from "fs";

//https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji-jouyou.json
const file = fs.readFileSync('./scripts/data/kanji-jouyou.json').toString();
const kanjis = JSON.parse(file);

console.log(`got ${Object.keys(kanjis).length} kanjis`);
const groups = {
    byGrade: {},
    byStrokes: {},
    byFreq: [],

};
for (const k of Object.keys(kanjis)) {
    const kInfo = kanjis[k];

    groups.byFreq.push({ f: kInfo.freq, k });

    Boolean(groups.byStrokes[kInfo.strokes]) ? groups.byStrokes[kInfo.strokes].push(k) : groups.byStrokes[kInfo.strokes] = [k];
    Boolean(groups.byGrade[kInfo.grade]) ? groups.byGrade[kInfo.grade].push(k) : groups.byGrade[kInfo.grade] = [k];
}

groups.byFreq = groups.byFreq.sort((i, o) => o.f - i.f);

fs.writeFileSync('./scripts/data/kanji-groups.json', JSON.stringify(groups));
const files = [
    'kanji-groups',
    'words',
    'kanji-jouyou',
];
for (const file of files) {
    fs.copyFileSync(`./scripts/data/${file}.json`, `public/assets/data/${file}.json`);
}