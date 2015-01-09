define([], function () {
  return {
    name: 'CSS Font Loading',
    description: 'The [CSS3 font loading module](http://dev.w3.org/csswg/css-font-loading/) defines a new interface for managing web fonts. It can be used to load fonts, manipulate fonts already in the document and gives you JavaScript events for font load states.',
    specification: 'http://dev.w3.org/csswg/css-font-loading/',
    keywords: ['font events', 'font loading', 'font', 'loading', 'event'],
    browsers: [
      { name: "ie",      range: "-",   support: "no" },
      { name: "chrome",  range: "-34", support: "no" },
      { name: "chrome",  range: "35-", support: "yes" },
      { name: "firefox", range: "-",   support: "no", note: "Support for the CSS Font Loading API should be available in Firefox 35 ([source](https://bugzilla.mozilla.org/show_bug.cgi?id=1028497))." },
      { name: "opera",   range: "-21", support: "no" },
      { name: "opera",   range: "22-", support: "yes" },
      { name: "safari",  range: "-",   support: "no" },
      { name: "ios",     range: "-",   support: "no" },
      { name: "android", range: "-",   support: "no" }
    ]
  };
});
