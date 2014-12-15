define(function () {
  return {
    name: "hyphenate-character",
    specification: "http://dev.w3.org/csswg/css-text-4/#hyphenate-character",
    keywords: ["hyphenate", "hyphens", "hyphenation", "hyphen", "character"],
    browsers: [
      { name: "ie",      range: "-",   support: "no" },
      { name: "chrome",  range: "-",   support: "yes" },
      { name: "firefox", range: "-",   support: "no" },
      { name: "safari",  range: "-",   support: "yes" },
      { name: "ios",     range: "-",   support: "yes" },
      { name: "opera",   range: "-12", support: "no" },
      { name: "opera",   range: "15-", support: "yes" },
      { name: "android", range: "-3",  support: "no" },
      { name: "android", range: "4-",  support: "yes" }
    ]
  };
});
