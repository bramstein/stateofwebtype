define(function () {
  return {
    name: "font-feature-settings",
    description: "The font-feature-settings property can be used to enable or disable OpenType features.",
    browsers: [
      { name: "ie", range: "-9", support: "no" },
      { name: "ie", range: "10-", support: "yes" },
      { name: "chrome", range: "-32", support: "no", note: "Applying OpenType features stops web fonts from working." },
      { name: "chrome", range: "33-", support: "yes", note: "Chrome does not enable any of the required default OpenType features." },
      { name: "firefox", range: "3.6", support: "no" },
      { name: "firefox", range: "4-", support: "yes", note: "Combinations of stylistic sets do not render properly before Firefox 15." },
      { name: "safari", range: "-5", support: "no" },
      { name: "safari", range: "6-", support: "partial", note: "Safari supports OpenType features and the font-feature-settings syntax but ignores any values. Instead it explicitly enables a select number of features." },
      { name: "ios", range: "-5", support: "no" },
      { name: "ios", range: "6-", support: "partial", note: "Safari on iOS supports OpenType features and the font-feature-settings syntax but ignores any value. Instead it explicitly enables a select number of features." },
      { name: "opera", range: "-12.16", support: "no" },
      { name: "opera", range: "15-", support: "yes" },
      // Android needs more investigation. Is there such a thing as a
      // default browser on 4.4, or is it Chrome?
      { name: "android", range: "-4.3", support: "no" },
      { name: "android", range: "4.4-", support: "yes" }
    ],
    features: [
      {
        name: "Standard Ligatures (liga)",
        keywords: ["liga", "ligatures", "opentype features"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33", support: "partial", note: "Chrome 33 does not apply ligatures if they contain a space. This bug was fixed in Chrome 34.", default: false },
          { name: "chrome", range: "34-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-22", support: "partial", note: "Firefox 4 to 22 do not render ligatures with spaces correctly.", default: true, locked: false },
          { name: "firefox", range: "23-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-5", support: "no", default: true, locked: true },
          { name: "safari", range: "6-", support: "yes", default: true, locked: true, note: "Ligatures are enabled by default." },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", default: true, locked: true, note: "Ligatures are enabled by default." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "yes", default: false }
        ]
      },
      {
        name: "Contextual Ligatures (clig)",
        keywords: ["clig", "ligatures", "opentype features"],
        required: true,
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Contextual ligatures are enabled by default.", default: true, locked: true },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", note: "Contextual ligatures are enabled by default.", default: true, locked: true },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Discretionary Ligatures (dlig)",
        keywords: ["clig", "ligatures", "opentype features"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Historical Ligatures (hlig)",
        keywords: ["hlig", "ligatures", "opentype features"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Required Ligatures (rlig)",
        required: true,
        keywords: ["rlig", "ligatures", "opentype features"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Required ligatures are enabled by default.", default: true, locked: true },
          { name: "ios", range: "-5", support: "no" },
          { name: "ios", range: "6-", support: "yes", note: "Required ligatures are enabled by default.", default: true, locked: true },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Small Capitals (smcp)",
        keywords: ["smcp", "opentype features", "small caps", "small-caps", "smallcaps", "capitals"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Small Capitals From Capitals (c2sc)",
        keywords: ["c2sc", "opentype features", "small capitals", "capitals"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Petite Capitals (pcap)",
        keywords: ["pcap", "opentype features", "petite capitals", "capitals"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Unicase (unic)",
        keywords: ["unic", "opentype features", "unicase", "capitals"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Case-Sensitive Forms (case)",
        keywords: ["case", "opentype features", "case sensitive"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Titling (titl)",
        keywords: ["titl", "opentype features", "titling"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Lining Numbers (lnum)",
        keywords: ["lnum", "opentype features", "lining numbers", "numerals", "numbers", "figures"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Oldstyle Numerals (onum)",
        keywords: ["onum", "opentype features", "oldstyle", "numerals", "numbers", "figures"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Proportional Numbers (pnum)",
        keywords: ["pnum", "opentype features", "proportional numbers", "numerals", "numbers", "figures"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Tabular Numbers (tnum)",
        keywords: ["tnum", "opentype features", "tabular numbers", "table", "numerals", "numbers", "figures"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Slashed Zero (zero)",
        keywords: ["zero", "opentype features", "zero", "slash", "numbers"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Superscript (sups)",
        keywords: ["sups", "opentype features", "superscript", "super script"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Subscript (subs)",
        keywords: ["subs", "opentype features", "subscript", "sub script"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Scientific Inferiors (sinf)",
        keywords: ["sinf", "opentype features", "scientific inferiors", "inferiors"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Numerators (numr)",
        keywords: ["numr", "opentype features", "numerator"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Denominators (dnom)",
        keywords: ["dnom", "opentype features", "denominators"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Ordinals (ordn)",
        keywords: ["ordn", "opentype features", "ordinals"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Fractions (frac)",
        keywords: ["frac", "opentype features", "fraction"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-33", support: "no" },
          { name: "chrome", range: "34-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-20", support: "no" },
          { name: "opera", range: "21-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Alternative Fractions (afrc)",
        keywords: ["afrc", "opentype features", "alternative", "fraction"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-33", support: "no" },
          { name: "chrome", range: "34-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-20", support: "no" },
          { name: "opera", range: "21-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Kerning (kern)",
        keywords: ["kern", "opentype features", "kerning", "keming"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-6", support: "no" },
          { name: "safari", range: "7-", support: "yes", note: "Kerning is enabled by default.", default: true, locked: true },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", note: "Ligatures are enabled by default.", default: true, locked: true },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Capital Spacing (cpsp)",
        keywords: ["cpsp", "opentype features", "capital", "spacing"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Initial Forms (init)",
        keywords: ["init", "opentype features", "initial", "forms"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Medial Forms (medi)",
        keywords: ["media", "opentype features", "medial", "forms"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Terminal Forms (fina)",
        keywords: ["fina", "opentype features", "terminal", "forms"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Isolated Forms (isol)",
        keywords: ["isol", "opentype features", "isolated", "forms"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Localized Forms (locl)",
        keywords: ["locl", "opentype features", "localized", "localised", "forms"],
        required: true,
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-36", support: "no" },
          { name: "chrome", range: "37-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-23", support: "no" },
          { name: "opera", range: "24-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Historical Forms (hist)",
        keywords: ["hist", "opentype features", "historical", "forms"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Ornaments (ornm)",
        keywords: ["ornm", "opentype features", "ornaments"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Swashes (swsh)",
        keywords: ["swsh", "opentype features", "swash"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Contextual Swash (cswh)",
        keywords: ["cswh", "opentype features", "contextual", "swash"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Contextual Alternates (calt)",
        required: true,
        keywords: ["calt", "opentype features", "contextual", "alternates"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: true, locked: false },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Contextual alternates are enabled by default.", default: true, locked: true },
          { name: "ios", range: "-5", support: "no" },
          { name: "ios", range: "6-", support: "yes", note: "Contextual alternates are enabled by default.", default: true, locked: true },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Stylistic Alternates (salt)",
        keywords: ["salt", "opentype features", "stylistic", "alternates"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "Stylistic Sets (ssxx)",
        keywords: ["ss00", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "ss09", "ss10", "ss11", "ss12", "ss13", "ss14", "ss15", "ss16", "ss17", "ss18", "ss19", "ss20", "opentype features", "stylistic", "sets"],
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes", default: false },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes", default: false },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes", default: false },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes", default: false },
          { name: "android", range: "-", support: "no" }
        ]
      }
    ]
  };
});
