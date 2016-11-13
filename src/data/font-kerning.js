define(function () {
  return {
    name: "font-kerning",
    description: "The `font-kerning` property is a high level way to explicitly enable or disable kerning. For a low level control (and better browser support), use the [`kern` OpenType feature](#kern) together with [`font-feature-settings`](#font-feature-settings).",
    specification: "http://www.w3.org/TR/css3-fonts/#font-kerning-prop",
    keywords: ["kern", "kerning"],
    browsers: [
      { name: "ie",      range: "-",  support: "no" },
      { name: "edge",    range: "-",  support: "no" },
      { name: "chrome",  range: "-",  support: "no" },
      { name: "firefox", range: "-",  support: "no" },
      { name: "opera",   range: "-",  support: "no" },
      { name: "safari",  range: "-6", support: "no" },
      { name: "safari",  range: "7-", support: "yes", note: "Safari has kerning enabled by default." },
      { name: "ios",     range: "-6", support: "no" },
      { name: "ios",     range: "7-", support: "yes" },
      { name: "android", range: "-",  support: "no" }
    ]
  };
});
