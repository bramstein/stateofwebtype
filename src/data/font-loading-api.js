define([], function () {
  return {
    name: 'CSS Font Loading',
    description: 'The [CSS3 font loading module](http://dev.w3.org/csswg/css-font-loading/) defines a new interface for managing web fonts. It can be used to load fonts, manipulate fonts already in the document and gives you JavaScript events for font load states.',
    specification: 'http://dev.w3.org/csswg/css-font-loading/',
    keywords: ['font events', 'font loading', 'font', 'loading', 'event'],
    browsers: [
      { name: "ie",      range: "-",   support: "no" },
      { name: "edge",    range: "-",   support: "no" },
      { name: "chrome",  range: "-34", support: "no" },
      { name: "chrome",  range: "35-", support: "yes" },
      { name: "firefox", range: "-40", support: "no" },
      { name: "firefox", range: "41-", support: "yes" },
      { name: "opera",   range: "-21", support: "no" },
      { name: "opera",   range: "22-", support: "yes" },
      { name: "safari",  range: "-",   support: "no" },
      { name: "ios",     range: "-",   support: "no" },
      { name: "android", range: "-",   support: "no" }
    ]
  };
});
