define(function () {
  return {
    name: "font-synthesis",
    description: "The `font-synthesis` property controls rendering of faux styles when the used font family does not have all the required styles. Setting `font-synthesis` to `weight` or `style` (or both) enables faux bold and faux italic. Setting `font-synthesis` to `none` disables all faux styles.",
    specification: "http://www.w3.org/TR/css3-fonts/#font-synthesis-prop",
    keywords: ["font", "font-synthesis", "synthesis"],
    browsers: [
      { name: "ie",      range: "-",  support: "no" },
      { name: "edge",    range: "-",  support: "no" },
      { name: "chrome",  range: "-",  support: "no" },
      { name: "firefox", range: "-33", support: "no" },
      { name: "firefox", range: "34-",  support: "yes" },
      { name: "opera",   range: "-",  support: "no" },
      { name: "safari",  range: "-8", support: "no" },
      { name: "safari",  range: "9-", support: "yes" },
      { name: "ios",     range: "-9.1", support: "no" },
      { name: "ios",     range: "9.1-", support: "yes" },
      { name: "android", range: "-",  support: "no" }
    ]
  };
});
