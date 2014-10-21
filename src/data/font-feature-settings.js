define(function () {
  return {
    name: "font-feature-settings",
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
      { name: "ios", range: "6-", support: "partial", note: "Safari on iOS supports OpenType features and the font-feature-settings syntax but ignores any value. Instead it explicitly enabled a select number of features." },
      { name: "opera", range: "-12.16", support: "no" },
      { name: "opera", range: "15-", support: "yes" },
      // Android needs more investigation. Is there such a thing as a
      // default browser on 4.4, or is it Chrome?
      { name: "android", range: "-4.3", support: "no" },
      { name: "android", range: "4.4-", support: "yes" }
    ],
    features: [
      {
        name: "liga",
        description: "Standard Ligatures",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33", support: "partial", note: "Chrome 33 does not apply ligatures if they contain a space. This bug was fixed in Chrome 34." },
          { name: "chrome", range: "34-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-22", support: "partial", note: "Firefox 4 to 22 do not render ligatures with spaces correctly." },
          { name: "firefox", range: "23-", support: "yes" },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Ligatures are always enabled." },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", note: "Ligatues are always enabled." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "clig",
        description: "Contextual Ligatures",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Contextual ligatures are always enabled." },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", note: "Ligatures are always enabled." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "dlig",
        description: "Discretionary Ligatures",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "hlig",
        description: "Historical Ligatures",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "rlig",
        description: "Required Ligatures",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Required ligatures are always enabled." },
          { name: "ios", range: "-5", support: "no" },
          { name: "ios", range: "6-", support: "yes", note: "Required ligatures are always enabled." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "smcp",
        description: "Small Capitals",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "c2sc",
        description: "Small Capitals From Capitals",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "pcap",
        description: "Petite Capitals",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "unic",
        description: "Unicase",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "case",
        description: "Case-Sensitive Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "titl",
        description: "Titling",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "lnum",
        description: "Lining Numbers",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "onum",
        description: "Oldstyle Numbers",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "pnum",
        description: "Proportional Numbers",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "tnum",
        description: "Tabular Numbers",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "zero",
        description: "Slashed Zero",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "sups",
        description: "Superscript",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "subs",
        description: "Subscript",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "sinf",
        description: "Scientific Inferiors",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "numr",
        "descriptions": "Numerators",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "dnom",
        "descriptions": "Denominators",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "ordn",
        "descriptions": "Ordinals",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "frac",
        "descriptions": "Fractions",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-33", support: "no" },
          { name: "chrome", range: "34-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-20", support: "no" },
          { name: "opera", range: "21-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "afrc",
        description: "Alternative Fractions",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-33", support: "no" },
          { name: "chrome", range: "34-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-20", support: "no" },
          { name: "opera", range: "21-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "kern",
        description: "Kerning",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-6", support: "no" },
          { name: "safari", range: "7-", support: "yes", note: "Kerning is always enabled." },
          { name: "ios", range: "-6", support: "no" },
          { name: "ios", range: "7-", support: "yes", note: "Ligatures are always enabled." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "cpsp",
        description: "Capital Spacing",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "init",
        description: "Initial Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "medi",
        description: "Medial Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "fina",
        description: "Terminal Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "isol",
        description: "Isolated Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "locl",
        description: "Localized Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-36", support: "no" },
          { name: "chrome", range: "37-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-23", support: "no" },
          { name: "opera", range: "24-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "hist",
        description: "Historical Forms",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "ornm",
        description: "Ornaments",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "swsh",
        description: "Swashes",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "cswh",
        description: "Contextual Swash",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "calt",
        description: "Contextual Alternates",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-5", support: "no" },
          { name: "safari", range: "6-", support: "yes", note: "Contextual alternates are always enabled." },
          { name: "ios", range: "-5", support: "no" },
          { name: "ios", range: "6-", support: "yes", note: "Contextual alternates are always enabled." },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "salt",
        description: "Stylistic Alternates",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "ssxx",
        description: "Stylistic Sets",
        browsers: [
          { name: "ie", range: "-9", support: "no" },
          { name: "ie", range: "10-", support: "yes" },
          { name: "chrome", range: "-32", support: "no" },
          { name: "chrome", range: "33-", support: "yes" },
          { name: "firefox", range: "3.6", support: "no" },
          { name: "firefox", range: "4-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-", support: "no" }
        ]
      }
    ]
  };
});
