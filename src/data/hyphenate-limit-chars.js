define(function () {
  return {
    name: "hyphenate-limit-chars",
    keywords: ["hyphenate", "hyphens", "hyphenation", "hyphen", "limit", "character"],
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
