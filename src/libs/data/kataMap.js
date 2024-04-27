export const ROMAJI_CHARS = {
    A: 'a',
    I: 'i',
    U: 'u',
    E: 'e',
    O: 'o',
    KA: 'ka',
    KI: 'ki',
    KU: 'ku',
    KE: 'ke',
    KO: 'ko',
    SA: 'sa',
    SHI: 'shi',
    SU: 'su',
    SE: 'se',
    SO: 'so',
    TA: 'ta',
    CHI: 'chi',
    TSU: 'tsu',
    TE: 'te',
    TO: 'to',
    NA: 'na',
    NI: 'ni',
    NU: 'nu',
    NE: 'ne',
    NO: 'no',
    HA: 'ha',
    HI: 'hi',
    FU: 'fu',
    HE: 'he',
    HO: 'ho',
    MA: 'ma',
    MI: 'mi',
    MU: 'mu',
    ME: 'me',
    MO: 'mo',
    YA: 'ya',
    YU: 'yu',
    YO: 'yo',
    RA: 'ra',
    RI: 'ri',
    RU: 'ru',
    RE: 're',
    RO: 'ro',
    WA: 'wa',
    WO: 'wo',
    N: 'n',
    GA: 'ga',
    GI: 'gi',
    GU: 'gu',
    GE: 'ge',
    GO: 'go',
    ZA: 'za',
    JI: 'ji',
    ZU: 'zu',
    ZE: 'ze',
    ZO: 'zo',
    DA: 'da',
    D_JI: 'd_ji',
    D_ZU: 'd_zu',
    DE: 'de',
    DO: 'do',
    BA: 'ba',
    BI: 'bi',
    BU: 'bu',
    BE: 'be',
    BO: 'bo',
    PA: 'pa',
    PI: 'pi',
    PU: 'pu',
    PE: 'pe',
    PO: 'po',
    KYA: 'kya',
    KYU: 'kyu',
    KYO: 'kyo',
    GYA: 'gya',
    GYU: 'gyu',
    GYO: 'gyo',
    SHA: 'sha',
    SHU: 'shu',
    SHO: 'sho',
    JA: 'ja',
    JU: 'ju',
    JO: 'jo',
    CHA: 'cha',
    CHU: 'chu',
    CHO: 'cho',
    NYA: 'nya',
    NYU: 'nyu',
    NYO: 'nyo',
    HYA: 'hya',
    HYU: 'hyu',
    HYO: 'hyo',
    BYA: 'bya',
    BYU: 'byu',
    BYO: 'byo',
    PYA: 'pya',
    PYU: 'pyu',
    PYO: 'pyo',
    MYA: 'mya',
    MYU: 'myu',
    MYO: 'myo',
    RYA: 'rya',
    RYU: 'ryu',
    RYO: 'ryo'
};

export const KATA_MAP = {
    [ROMAJI_CHARS.A]: { hiragana: 'あ', katakana: 'ア', romaji: 'a' },
    [ROMAJI_CHARS.I]: { hiragana: 'い', katakana: 'イ', romaji: 'i' },
    [ROMAJI_CHARS.U]: { hiragana: 'う', katakana: 'ウ', romaji: 'u' },
    [ROMAJI_CHARS.E]: { hiragana: 'え', katakana: 'エ', romaji: 'e' },
    [ROMAJI_CHARS.O]: { hiragana: 'お', katakana: 'オ', romaji: 'o' },
    [ROMAJI_CHARS.KA]: { hiragana: 'か', katakana: 'カ', romaji: 'ka' },
    [ROMAJI_CHARS.KI]: { hiragana: 'き', katakana: 'キ', romaji: 'ki' },
    [ROMAJI_CHARS.KU]: { hiragana: 'く', katakana: 'ク', romaji: 'ku' },
    [ROMAJI_CHARS.KE]: { hiragana: 'け', katakana: 'ケ', romaji: 'ke' },
    [ROMAJI_CHARS.KO]: { hiragana: 'こ', katakana: 'コ', romaji: 'ko' },
    [ROMAJI_CHARS.SA]: { hiragana: 'さ', katakana: 'サ', romaji: 'sa' },
    [ROMAJI_CHARS.SHI]: { hiragana: 'し', katakana: 'シ', romaji: 'shi' },
    [ROMAJI_CHARS.SU]: { hiragana: 'す', katakana: 'ス', romaji: 'su' },
    [ROMAJI_CHARS.SE]: { hiragana: 'せ', katakana: 'セ', romaji: 'se' },
    [ROMAJI_CHARS.SO]: { hiragana: 'そ', katakana: 'ソ', romaji: 'so' },
    [ROMAJI_CHARS.TA]: { hiragana: 'た', katakana: 'タ', romaji: 'ta' },
    [ROMAJI_CHARS.CHI]: { hiragana: 'ち', katakana: 'チ', romaji: 'chi' },
    [ROMAJI_CHARS.TSU]: { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu' },
    [ROMAJI_CHARS.TE]: { hiragana: 'て', katakana: 'テ', romaji: 'te' },
    [ROMAJI_CHARS.TO]: { hiragana: 'と', katakana: 'ト', romaji: 'to' },
    [ROMAJI_CHARS.NA]: { hiragana: 'な', katakana: 'ナ', romaji: 'na' },
    [ROMAJI_CHARS.NI]: { hiragana: 'に', katakana: 'ニ', romaji: 'ni' },
    [ROMAJI_CHARS.NU]: { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu' },
    [ROMAJI_CHARS.NE]: { hiragana: 'ね', katakana: 'ネ', romaji: 'ne' },
    [ROMAJI_CHARS.NO]: { hiragana: 'の', katakana: 'ノ', romaji: 'no' },
    [ROMAJI_CHARS.HA]: { hiragana: 'は', katakana: 'ハ', romaji: 'ha' },
    [ROMAJI_CHARS.HI]: { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi' },
    [ROMAJI_CHARS.FU]: { hiragana: 'ふ', katakana: 'フ', romaji: 'fu' },
    [ROMAJI_CHARS.HE]: { hiragana: 'へ', katakana: 'ヘ', romaji: 'he' },
    [ROMAJI_CHARS.HO]: { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho' },
    [ROMAJI_CHARS.MA]: { hiragana: 'ま', katakana: 'マ', romaji: 'ma' },
    [ROMAJI_CHARS.MI]: { hiragana: 'み', katakana: 'ミ', romaji: 'mi' },
    [ROMAJI_CHARS.MU]: { hiragana: 'む', katakana: 'ム', romaji: 'mu' },
    [ROMAJI_CHARS.ME]: { hiragana: 'め', katakana: 'メ', romaji: 'me' },
    [ROMAJI_CHARS.MO]: { hiragana: 'も', katakana: 'モ', romaji: 'mo' },
    [ROMAJI_CHARS.YA]: { hiragana: 'や', katakana: 'ヤ', romaji: 'ya' },
    [ROMAJI_CHARS.YU]: { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu' },
    [ROMAJI_CHARS.YO]: { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo' },
    [ROMAJI_CHARS.RA]: { hiragana: 'ら', katakana: 'ラ', romaji: 'ra' },
    [ROMAJI_CHARS.RI]: { hiragana: 'り', katakana: 'リ', romaji: 'ri' },
    [ROMAJI_CHARS.RU]: { hiragana: 'る', katakana: 'ル', romaji: 'ru' },
    [ROMAJI_CHARS.RE]: { hiragana: 'れ', katakana: 'レ', romaji: 're' },
    [ROMAJI_CHARS.RO]: { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro' },
    [ROMAJI_CHARS.WA]: { hiragana: 'わ', katakana: 'ワ', romaji: 'wa' },
    [ROMAJI_CHARS.WO]: { hiragana: 'を', katakana: 'ヲ', romaji: 'wo' },
    [ROMAJI_CHARS.N]: { hiragana: 'ん', katakana: 'ン', romaji: 'n' },

    [ROMAJI_CHARS.GA]: { hiragana: 'が', katakana: 'ガ', romaji: 'ga', base: ROMAJI_CHARS.KA },
    [ROMAJI_CHARS.GI]: { hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', base: ROMAJI_CHARS.KI },
    [ROMAJI_CHARS.GU]: { hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', base: ROMAJI_CHARS.KU },
    [ROMAJI_CHARS.GE]: { hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', base: ROMAJI_CHARS.KE },
    [ROMAJI_CHARS.GO]: { hiragana: 'ご', katakana: 'ゴ', romaji: 'go', base: ROMAJI_CHARS.KO },
    [ROMAJI_CHARS.ZA]: { hiragana: 'ざ', katakana: 'ザ', romaji: 'za', base: ROMAJI_CHARS.SA },
    [ROMAJI_CHARS.JI]: { hiragana: 'じ', katakana: 'ジ', romaji: 'ji', base: ROMAJI_CHARS.SHI },
    [ROMAJI_CHARS.ZU]: { hiragana: 'ず', katakana: 'ズ', romaji: 'zu', base: ROMAJI_CHARS.SU },
    [ROMAJI_CHARS.ZE]: { hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', base: ROMAJI_CHARS.SE },
    [ROMAJI_CHARS.ZO]: { hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', base: ROMAJI_CHARS.SO },
    [ROMAJI_CHARS.DA]: { hiragana: 'だ', katakana: 'ダ', romaji: 'da', base: ROMAJI_CHARS.TA },
    [ROMAJI_CHARS.D_JI]: { hiragana: 'ぢ', katakana: 'ヂ', romaji: 'd_ji', romajiLabel: '(d)ji', base: ROMAJI_CHARS.CHI },
    [ROMAJI_CHARS.D_ZU]: { hiragana: 'づ', katakana: 'ヅ', romaji: 'd_zu', romajiLabel: '(d)zu', base: ROMAJI_CHARS.TSU },
    [ROMAJI_CHARS.DE]: { hiragana: 'で', katakana: 'デ', romaji: 'de', base: ROMAJI_CHARS.TE },
    [ROMAJI_CHARS.DO]: { hiragana: 'ど', katakana: 'ド', romaji: 'do', base: ROMAJI_CHARS.TO },
    [ROMAJI_CHARS.BA]: { hiragana: 'ば', katakana: 'バ', romaji: 'ba', base: ROMAJI_CHARS.HA },
    [ROMAJI_CHARS.BI]: { hiragana: 'び', katakana: 'ビ', romaji: 'bi', base: ROMAJI_CHARS.HO },
    [ROMAJI_CHARS.BU]: { hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', base: ROMAJI_CHARS.FU },
    [ROMAJI_CHARS.BE]: { hiragana: 'べ', katakana: 'ベ', romaji: 'be', base: ROMAJI_CHARS.BE },
    [ROMAJI_CHARS.BO]: { hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', base: ROMAJI_CHARS.HO },
    [ROMAJI_CHARS.PA]: { hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', base: ROMAJI_CHARS.HA },
    [ROMAJI_CHARS.PI]: { hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', base: ROMAJI_CHARS.HI },
    [ROMAJI_CHARS.PU]: { hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', base: ROMAJI_CHARS.FU },
    [ROMAJI_CHARS.PE]: { hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', base: ROMAJI_CHARS.HE },
    [ROMAJI_CHARS.PO]: { hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', base: ROMAJI_CHARS.HO },

    [ROMAJI_CHARS.KYA]: { hiragana: 'きゃ', katakana: 'キャ', romaji: 'kya' },
    [ROMAJI_CHARS.KYU]: { hiragana: 'きゅ', katakana: 'キュ', romaji: 'kyu' },
    [ROMAJI_CHARS.KYO]: { hiragana: 'きょ', katakana: 'キョ', romaji: 'kyo' },
    [ROMAJI_CHARS.GYA]: { hiragana: 'ぎゃ', katakana: 'ギャ', romaji: 'gya' },
    [ROMAJI_CHARS.GYU]: { hiragana: 'ぎゅ', katakana: 'ギュ', romaji: 'gyu' },
    [ROMAJI_CHARS.GYO]: { hiragana: 'ぎょ', katakana: 'ギョ', romaji: 'gyo' },
    [ROMAJI_CHARS.SHA]: { hiragana: 'しゃ', katakana: 'シャ', romaji: 'sha' },
    [ROMAJI_CHARS.SHU]: { hiragana: 'しゅ', katakana: 'シュ', romaji: 'shu' },
    [ROMAJI_CHARS.SHO]: { hiragana: 'しょ', katakana: 'ショ', romaji: 'sho' },
    [ROMAJI_CHARS.JA]: { hiragana: 'じゃ', katakana: 'ジャ', romaji: 'ja' },
    [ROMAJI_CHARS.JU]: { hiragana: 'じゅ', katakana: 'ジュ', romaji: 'ju' },
    [ROMAJI_CHARS.JO]: { hiragana: 'じょ', katakana: 'ジョ', romaji: 'jo' },
    [ROMAJI_CHARS.CHA]: { hiragana: 'ちゃ', katakana: 'チャ', romaji: 'cha' },
    [ROMAJI_CHARS.CHU]: { hiragana: 'ちゅ', katakana: 'チュ', romaji: 'chu' },
    [ROMAJI_CHARS.CHO]: { hiragana: 'ちょ', katakana: 'チョ', romaji: 'cho' },
    [ROMAJI_CHARS.NYA]: { hiragana: 'にゃ', katakana: 'ニャ', romaji: 'nya' },
    [ROMAJI_CHARS.NYU]: { hiragana: 'にゅ', katakana: 'ニュ', romaji: 'nyu' },
    [ROMAJI_CHARS.NYO]: { hiragana: 'にょ', katakana: 'ニョ', romaji: 'nyo' },
    [ROMAJI_CHARS.HYA]: { hiragana: 'ひゃ', katakana: 'ヒャ', romaji: 'hya' },
    [ROMAJI_CHARS.HYU]: { hiragana: 'ひゅ', katakana: 'ヒュ', romaji: 'hyu' },
    [ROMAJI_CHARS.HYO]: { hiragana: 'ひょ', katakana: 'ヒョ', romaji: 'hyo' },
    [ROMAJI_CHARS.BYA]: { hiragana: 'びゃ', katakana: 'ビャ', romaji: 'bya' },
    [ROMAJI_CHARS.BYU]: { hiragana: 'びゅ', katakana: 'ビュ', romaji: 'byu' },
    [ROMAJI_CHARS.BYO]: { hiragana: 'びょ', katakana: 'ビョ', romaji: 'byo' },
    [ROMAJI_CHARS.PYA]: { hiragana: 'ぴゃ', katakana: 'ピャ', romaji: 'pya' },
    [ROMAJI_CHARS.PYU]: { hiragana: 'ぴゅ', katakana: 'ピュ', romaji: 'pyu' },
    [ROMAJI_CHARS.PYO]: { hiragana: 'ぴょ', katakana: 'ピョ', romaji: 'pyo' },
    [ROMAJI_CHARS.MYA]: { hiragana: 'みゃ', katakana: 'ミャ', romaji: 'mya' },
    [ROMAJI_CHARS.MYU]: { hiragana: 'みゅ', katakana: 'ミュ', romaji: 'myu' },
    [ROMAJI_CHARS.MYO]: { hiragana: 'みょ', katakana: 'ミョ', romaji: 'myo' },
    [ROMAJI_CHARS.RYA]: { hiragana: 'りゃ', katakana: 'リャ', romaji: 'rya' },
    [ROMAJI_CHARS.RYU]: { hiragana: 'りゅ', katakana: 'リュ', romaji: 'ryu' },
    [ROMAJI_CHARS.RYO]: { hiragana: 'りょ', katakana: 'リョ', romaji: 'ryo' }
};
