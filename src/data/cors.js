define(function () {
  return {
    name: "CORS",
    description: "Web fonts are subject to the [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy). Browser correctly implementing the same origin policy will, by default, only download web fonts from the domain they are hosted on. [Cross Origin Resource Sharing (CORS)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) can be used to authorize third party domains to download web fonts as well. If a browser supports this feature it enforces the same origin policy correctly and requires CORS for third party domains. If the browser does not support this feature, fonts can be downloaded from any domain.",
    specification: "https://drafts.csswg.org/css-fonts-3/#font-fetching-requirements",
    keywords: ["cross", "origin", "resource", "sharing", "cors", "web fonts", "same", "origin", "policy"],
    browsers: [
      { name: "ie", range: "-8", support: "no" },
      { name: "ie", range: "9-", support: "yes" },
      { name: "edge", range: "-", support: "yes" },
      { name: "chrome", range: "-36", support: "no" },
      { name: "chrome", range: "37-", support: "yes" },
      { name: "firefox", range: "-", support: "yes" },
      { name: "safari", range: "-", support: "no", note: "See WebKit bug [#86817](https://bugs.webkit.org/show_bug.cgi?id=86817)." },
      { name: "ios", range: "-", support: "no" },
      { name: "opera", range: "-23", support: "no" },
      { name: "opera", range: "24-", support: "yes" },
      { name: "android", range: "-", support: "no", note: "The same origin policy is enforced for Chrome for Android, but not in the default builtin browser in older Android versions." },
    ]
  };
});
