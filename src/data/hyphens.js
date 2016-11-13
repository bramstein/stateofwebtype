define(function () {
  return {
    name: "hyphens",
    specification: "http://www.w3.org/TR/css3-text/#hyphens-property",
    keywords: ["hyphenate", "hyphens", "hyphenation", "hyphen"],
    browsers: [
      { name: "ie", range: "-9", support: "no" },
      { name: "ie", range: "10-", support: "yes" },
      { name: "edge", range: "-", support: "yes" },

      // This needs further testing. The property is supported from at least Chrome 14,
      // but at which version was it introduced? It also seems to have disappeared in
      // Chrome 37.
      { name: "chrome", range: "-", support: "no", note: "The hyphens property was supported in older versions, but did not work due to a lack of hyphenation dictionaries. The property has since been removed." },
      { name: "firefox", range: "-5", support: "no" },
      { name: "firefox", range: "6-", support: "yes" },
      { name: "safari", range: "-5", support: "no" },
      { name: "safari", range: "5.1-", support: "yes" },
      { name: "ios", range: "-4.1", support: "no" },
      { name: "ios", range: "4.3-", support: "yes" },
      { name: "opera", range: "-", support: "no" },
      { name: "android", range: "-3", support: "no" },
      { name: "android", range: "4-", support: "partial", note: "The hyphens property was supported in older versions, but did not work due to a lack of hyphenation dictionaries. The property has since been removed." }
    ]
  };
});
