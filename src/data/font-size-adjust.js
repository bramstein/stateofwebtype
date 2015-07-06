define(function () {
  return {
    name: "font-size-adjust",
    description: "The `font-size-adjust` property lets you maintain a consistent x-height across fonts. This can be used as a way to reduce the jarring effect when fallback fonts are replaced by web fonts.",
    specification: "http://www.w3.org/TR/css3-fonts/#font-size-adjust-prop",
    keywords: ["font", "font-size", "font-size-adjust", "adjust"],
    browsers: [
      { name: "ie",      range: "-",  support: "no" },
      { name: "chrome",  range: "-",  support: "no" },
      { name: "firefox", range: "-", support: "yes" },
      { name: "opera",   range: "-",  support: "no" },
      { name: "safari",  range: "-", support: "no" },
      { name: "ios",     range: "-", support: "no" },
      { name: "android", range: "-",  support: "no" }
    ]
  };
});
