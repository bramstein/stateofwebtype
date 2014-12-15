define(function () {
  return {
    name: "hyphenate-limit-last",
    specification: "http://dev.w3.org/csswg/css-text-4/#hyphenate-limit-last",
    keywords: ["hyphenate", "hyphens", "hyphenation", "hyphen", "limit"],
    browsers: [
      { name: "ie", range: "-9", support: "no" },
      { name: "ie", range: "10-", support: "yes" },
      { name: "chrome", range: "-", support: "no" },
      { name: "firefox", range: "-", support: "no" },
      { name: "safari", range: "-", support: "no" },
      { name: "ios", range: "-", support: "no" },
      { name: "opera", range: "-", support: "no" },
      { name: "android", range: "-", support: "no" }
    ]
  };
});
