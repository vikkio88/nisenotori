import { ROMANJI_CHARS as r } from "./kataMap";

export const ALL_SYLLABALES = Object.values(r);
export const A = [r.A, r.I, r.U, r.E, r.O];
export const K = [r.KA, r.KI, r.KU, r.KE, r.KO];

export const S = [r.SA, r.SHI, r.SU, r.SE, r.SO];
export const T = [r.TA, r.CHI, r.TSU, r.TE, r.TO];
export const N = [r.NA, r.NI, r.NU, r.NE, r.NO];
export const H = [r.HA, r.HI, r.FU, r.HE, r.HO];
export const M = [r.MA, r.MI, r.MU, r.ME, r.MO];
export const Y = [r.YA, r.YU, r.YO];
export const R = [r.RA, r.RI, r.RU, r.RE, r.RO];
export const W = [r.WA, r.WO];
export const n = [r.N];

export const BASE = [...A, ...K, ...S, ...T, ...N, ...H, ...M, ...Y, ...R, ...W, ...n];

export const G = [r.GA, r.GI, r.GU, r.GE, r.GO];
export const eK = [...K, ...G];
export const Z = [r.ZA, r.JI, r.ZU, r.ZE, r.ZO];
export const eS = [...S, ...Z];
export const D = [r.DA, r.D_JI, r.D_ZU, r.DE, r.DO];
export const eT = [...T, ...D];
export const B = [r.BA, r.BI, r.BU, r.BE, r.BO];
export const eH = [...H, ...B];
export const P = [r.PA, r.PI, r.PU, r.PE, r.PO];
export const eH2 = [...H, ...P];

export const DAKUON = [...G, ...Z, ...D, ...B, ...P];


export const KY = [r.KYA, r.KYU, r.KYO];
export const GY = [r.GYA, r.GYU, r.GYO];
export const SH = [r.SHA, r.SHU, r.SHO];
export const J = [r.JA, r.JU, r.JO];
export const CH = [r.CHA, r.CHU, r.CHO];
export const NY = [r.NYA, r.NYU, r.NYO];
export const HY = [r.HYA, r.HYU, r.HYO];
export const BY = [r.BYA, r.BYU, r.BYO];
export const PY = [r.PYA, r.PYU, r.PYO];
export const MY = [r.MYA, r.MYU, r.MYO];
export const RY = [r.RYA, r.RYU, r.RYO];
export const COMBO = [...KY, ...GY, ...SH, ...J, ...CH, ...NY, ...HY, ...BY, ...PY, ...MY, ...RY];


export const CHARSETS = [
    // in Cards pages I use [0] as default one
    { label: 'Base', charset: BASE },
    //

    { label: 'All', charset: ALL_SYLLABALES },
    { label: 'A-O', charset: A },
    { label: 'K', charset: K },
    { label: 'K + Dakuon', charset: eK },
    { label: 'S', charset: S },
    { label: 'S + Dakuon', charset: eS },

    { label: 'T', charset: T },
    { label: 'T + Dakuon', charset: eT },
    { label: 'N', charset: N },
    { label: 'H', charset: H },
    { label: 'H + Dakuon', charset: [...eH, ...eH2] },

    { label: 'M', charset: M },
    { label: 'Y', charset: Y },
    { label: 'R', charset: R },
    { label: 'W', charset: W },

    { label: 'G', charset: G },
    { label: 'Z', charset: Z },
    { label: 'D', charset: D },
    { label: 'B', charset: B },
    { label: 'P', charset: P },

    { label: 'Only Daukon', charset: DAKUON },
    { label: 'Combo', charset: COMBO },
];

export const charsetOptions = CHARSETS.map((c, i) => ({ value: i, ...c }));