define(function () {
  return {
    name: "hyphens",
    browsers: [
      { name: "ie", range: "-9", support: "no" },
      { name: "ie", range: "10-", support: "yes" },

      // This needs further testing. The property is supported from at least Chrome 14,
      // but at which version was it introduced? It also seems to have disappeared in
      // Chrome 37.
      { name: "chrome", range: "-", support: "no", note: "It supports the property but does not ship with any hyphenation dictionaries." },
      { name: "firefox", range: "-5", support: "no" },
      { name: "firefox", range: "6-", support: "yes" },
      { name: "safari", range: "-5", support: "no" },
      { name: "safari", range: "5.1-", support: "yes" },
      { name: "ios", range: "-4.1", support: "no" },
      { name: "ios", range: "4.3-", support: "yes" },
      { name: "opera", range: "-", support: "no" },
      { name: "android", range: "-3", support: "no" },
      { name: "android", range: "4-", support: "partial", note: "It supports the property but does not ship with any hyphenation dictionaries." }
    ]
  };
});
