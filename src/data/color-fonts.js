define(function () {
  return {
    name: "Color fonts",
    description: "Four color font formats are currently in existence: COLR/CPAL, sbix, OpenType-SVG, and CBDT/CBLC. Support is fragmented. When unsupported, the browser will fall back to regular glyphs in the font. Read about [the differences of the formats](http://pixelambacht.nl/2014/multicolor-fonts/).",
    keywords: ["color", "multicolor"],
    browsers: [
      { name: "ie",      range: "-10", support: "no" },
      { name: "ie",      range: "11-",  support: "partial", note: "Only COLR/CPAL on Windows 8.1+." },
      { name: "edge",    range: "-37", support: "partial", note: "Only COLR/CPAL." },
      { name: "edge",    range: "38-", support: "yes" },
      { name: "chrome",  range: "-",  support: "no" },
      { name: "firefox", range: "-35", support: "no" },
      { name: "firefox", range: "36-",  support: "partial", note: "Only COLR/CPAL and OpenType-SVG." },
      { name: "opera",   range: "-",  support: "no" },
      { name: "safari",  range: "-8", support: "no" },
      { name: "safari",  range: "9-10", support: "partial", note: "Only sbix." },
      { name: "safari",  range: "11-", support: "partial", note: "Only COLR/CPAL and sbix." },
      { name: "ios",     range: "-8.1", support: "no" },
      { name: "ios",     range: "9.1-10", support: "partial", note: "Only sbix." },
      { name: "ios",  range: "11-", support: "partial", note: "Only COLR/CPAL and sbix." },
      { name: "android", range: "-",  support: "no" }
    ],
    features: [
      {
        name: "sbix",
        description: "Apple's color format. Uses embedded JPG, PNG, or TIFF images to represent the color glyphs.",
        specification: "https://www.microsoft.com/typography/otspec/sbix.htm",
        keywords: ['color', 'multicolor', 'sbix', 'apple'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-37", support: "no" },
          { name: "edge", range: "38-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-8", support: "no" },
          { name: "safari", range: "9-", support: "yes" },
          { name: "ios", range: "-8.1", support: "no" },
          { name: "ios", range: "9.1-", support: "yes" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "COLR/CPAL",
        description: "Microsoft's color format. Uses layered glyphs to create multicolor ones.",
        specification: "https://www.microsoft.com/typography/otspec/colr.htm",
        keywords: ['color', 'multicolor', 'colr', 'cpal', 'microsoft'],
        browsers: [
          { name: "ie", range: "-10", support: "no" },
          { name: "ie", range: "11-", support: "yes", note: "Only on Windows 8.1 and above." },
          { name: "edge", range: "-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-31", support: "no" },
          { name: "firefox", range: "32-", support: "yes" },
          { name: "safari", range: "-11", support: "no" },
          { name: "safari", range: "11-", support: "yes" },
          { name: "ios", range: "-", support: "no" },
          { name: "ios", range: "11-", support: "yes" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "OpenType-SVG",
        description: "Mozilla and Adobe's color format. Uses embedded SVG images to represent the color glyphs.",
        specification: "https://www.microsoft.com/typography/otspec/svg.htm",
        keywords: ['color', 'multicolor', 'svg', 'adobe', 'mozilla', 'svg-in-opentype', 'opentype-svg'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-37", support: "no" },
          { name: "edge", range: "38-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-25", support: "no" },
          { name: "firefox", range: "26-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "CBDT/CBLC",
        description: "Google's CBDT/CBLC color format. Uses embedded PNG images to represent the color glyphs.",
        specification: "https://www.microsoft.com/typography/otspec/cbdt.htm",
        keywords: ['color', 'multicolor', 'google', 'cbdt', 'cblc'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "edge", range: "-37", support: "no" },
          { name: "edge", range: "38-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no", note: "Only supported on Android when installed as a system font; not available through @font-face." }
        ]
      }
    ]
  };
});
