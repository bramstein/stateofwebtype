define(function () {
  return {
    name: "font-variant",
    description: "The `font-variant` property is a high-level notation for enabling OpenType features. It can enable and disable ligatures, superscript, subscript, alternate glyphs, and many others. Several sub-properties exist that target individual groups of OpenType features: [font-variant-ligatures](#font-variant-ligatures), [font-variant-caps](#font-variant-caps), [font-variant-numeric](#font-variant-numeric), [font-variant-position](#font-variant-position), and [font-variant-alternates](#font-variant-alternates).\n\nPartial supports refers to only supporting the `small-caps` value using faux small capitals and not enabling the [smcp](#smcp) OpenType feature.",
    specification: "http://www.w3.org/TR/css3-fonts/#font-variant-prop",
    keywords: ['font-variant', 'variant'],
    browsers: [
      { name: "ie", range: "-", support: "partial" },
      { name: "edge", range: "-", support: "partial" },
      { name: "chrome", range: "-", support: "partial" },
      { name: "firefox", range: "-33", support: "partial" },
      { name: "firefox", range: "34-", support: "yes" },
      { name: "safari", range: "-", support: "partial" },
      { name: "ios", range: "-", support: "partial" },
      { name: "opera", range: "-", support: "partial" },
      { name: "android", range: "-", support: "partial" }
    ],
    features: [
      {
        name: "font-variant-ligatures",
        description: "The `font-variant-ligatures` property is used to enable and disable normal, discretionary, historical, and contextual ligatures.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-variant-ligatures-prop",
        keywords: ['font-variant-ligatures', 'variant', 'ligatures', "common-ligatures", "discretionary-ligatures", "historical-ligatures", "contextual"],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no", note: "While the syntax is supported, none of the values work correctly." },
          { name: "firefox", range: "-33", support: "no" },
          { name: "firefox", range: "34-", support: "yes" },
          { name: "safari", range: "-", support: "no", note: "While the syntax is recognised from Safari 7, it can not be used to enable features. Disabling features works correctly." },
          { name: "ios", range: "-", support: "no", note: "While the syntax is recognised from iOS 6, it can not be used to enable any OpenType features. Disabling features works correctly." },
          { name: "opera", range: "-", support: "no", note: "While the syntax is supported, none of the values work correctly." },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "font-variant-position",
        description: "The `font-variant-position` property is used to enable superscript and subscript glyphs.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-variant-position-prop",
        keywords: ['font-variant-position', 'variant', 'position', 'sub', 'super', 'subscript', 'superscript'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-33", support: "no" },
          { name: "firefox", range: "34-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "font-variant-caps",
        description: "The `font-variant-caps` property is used to enable small capitals, petite capitals, unicase, and titling capitals.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-variant-caps-prop",
        keywords: ['font-variant-caps', 'variant', 'caps', 'small-caps', 'small', 'all-small-caps', 'capitals', 'petite', 'petite-caps', 'all-petite-caps', 'unicase', 'titling', 'titling-caps'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-33", support: "no" },
          { name: "firefox", range: "34-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
       {
        name: "font-variant-numeric",
        description: "The `font-variant-numeric` property is used to enable alternate glyphs for numbers. It can enable OpenType features such as old style numerals, fractions, and the slashed zero.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-variant-numeric-prop",
        keywords: ['font-variant-numeric', 'variant', 'numeric', 'lining', 'oldstyle', 'proportional', 'tabular', 'diagonal', 'stacked', 'ordinal', 'slashed', 'zero', 'fraction', 'fractions', 'nums', 'numerals', 'lining-nums', 'oldstyle-nums', 'proportional-nums', 'tabular-nums', 'diagonal-fractions', 'stacked-fractions', 'slashed-zero'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-33", support: "no" },
          { name: "firefox", range: "34-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "font-variant-alternates",
        description: "The `font-variant-alternates` property is used to enable alternate glyphs such as stylistic alternates, swashes, and ornaments. Support for `font-variant-alternates` also includes support for the [`@font-feature-values` rules](http://www.w3.org/TR/css3-fonts/#font-feature-values), which is used to give names to selected OpenType features.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-variant-alternates-prop",
        keywords: ['font-variant-alternates', 'variant', 'alternates', 'historical', 'historical-forms', 'stylistic', 'styleset', 'character', 'character-variant', 'variant', 'swash', 'ornaments', 'annotation'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-33", support: "no" },
          { name: "firefox", range: "34-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      }
    ]
  };
});

