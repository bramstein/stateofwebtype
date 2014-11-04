define(['Version', 'VersionArray', 'data/browsers'], function (Version, VersionArray, browsers) {
  function Browser(id, name, versions, currentIndex) {
    this.id = id;
    this.name = name;
    this.versions = versions;
    this.currentIndex = currentIndex;
  }

  var result = {};

  Object.keys(browsers).forEach(function (key) {
    var browser = browsers[key],
        name = null,
        versions = [],
        current = -1;

    if (browser.hasOwnProperty('name')) {
      name = browser.name
    } else {
      throw new Error('Browser "' + key + '" does not have a name.');
    }

    if (browser.hasOwnProperty('versions')) {
      versions = new VersionArray(browser.versions.map(Version.parse));
    } else {
      throw new Error('Browser "' + key + '" does not have versions.');
    }

    if (browser.hasOwnProperty('current')) {
        var index = versions.indexOf(Version.parse(browser.current));

        if (index !== -1) {
          result[key] = new Browser(key, name, versions, index);
        } else {
          throw new Error('Current version is not in versions for "' + key + '".');
        }
    } else {
      throw new Error('Browser "' + key + '" does not have a current version.');
    }
  });

  return result;
});
