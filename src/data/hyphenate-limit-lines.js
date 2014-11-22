define(function () {
  return {
    name: "hyphenate-limit-lines",
    keywords: ["hyphenate", "hyphens", "hyphenation", "hyphen"],
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
