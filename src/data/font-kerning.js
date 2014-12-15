define(function () {
  return {
    name: "font-kerning",
    specification: "http://www.w3.org/TR/css3-fonts/#font-kerning-prop",
    keywords: ["kern", "kerning"],
    browsers: [
      { name: "ie",      range: "-",  support: "no" },
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
