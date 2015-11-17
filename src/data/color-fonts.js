define(function () {
  return {
    name: "Color fonts",
    description: "Four color font formats are currently in existence: three OpenType proposals, one proprietary. Support is fragmented. When unsupported, the browser will fall back to regular glyphs in the font. Read about [the differences of the formats](http://pixelambacht.nl/2014/multicolor-fonts/).",
    keywords: ["color", "multicolor"],
    browsers: [
      { name: "ie",      range: "-10", support: "no" },
      { name: "ie",      range: "11-",  support: "yes", note: "Only COLR/CPAL on Windows 8.1+." },
      { name: "chrome",  range: "-",  support: "no" },
      { name: "firefox", range: "-35", support: "no" },
      { name: "firefox", range: "36-",  support: "yes", note: "Only COLR/CPAL and SVG-in-OpenType." },
      { name: "opera",   range: "-",  support: "no" },
      { name: "safari",  range: "-8", support: "no" },
      { name: "safari",  range: "9-", support: "yes", note: "Only Apple's proprietary SBIX." },
      { name: "ios",     range: "-8.1", support: "no" },
      { name: "ios",     range: "9.1-", support: "yes", note: "Only Apple's proprietary SBIX." },
      { name: "android", range: "-",  support: "no" }
    ],
    features: [
      {
        name: "SBIX",
        description: "Apple's proprietary implementation for color fonts. Uses embedded PNG images to represent the color glyphs.",
        specification: "https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6sbix.html",
        keywords: ['color', 'multicolor', 'sbix', 'apple'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
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
        description: "Mircosoft's proposal for the OpenType specification. Uses layered glyphs to create multicolor ones.",
        specification: "https://www.microsoft.com/typography/otspec/colr.htm",
        keywords: ['color', 'multicolor', 'colr', 'cpal', 'mircosoft'],
        browsers: [
          { name: "ie", range: "-10", support: "no" },
          { name: "ie", range: "11-", support: "yes", note: "Only on Windows 8.1 and above." },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-31", support: "no" },
          { name: "firefox", range: "32-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "SVG-in-OpenType",
        description: "Mozilla and Adobe's proposal for the OpenType specification. Uses embedded SVG images to represent the color glyphs.",
        specification: "http://www.w3.org/2013/10/SVG_in_OpenType/",
        keywords: ['color', 'multicolor', 'svg', 'adobe', 'mozilla', 'svg-in-opentype'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
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
        description: "Google's CBDT/CBLC. Currently only supported on Android when installed as a system font; not available through @font-face. Uses embedded PNG images to represent the color glyphs.",
        specification: "hhttps://www.microsoft.com/typography/otspec/cbdt.htm",
        keywords: ['color', 'multicolor', 'google', 'cbdt', 'cblc'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      }
    ]
  };
});
