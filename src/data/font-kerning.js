define(function () {
  return {
    name: "font-kerning",
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
