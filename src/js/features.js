define([
    'Version',
    'browsers',
    'marked',
    'data/values',
    'data/font-face',
    'data/font-feature-settings',
    'data/font-kerning',
    'data/font-size-adjust',
    'data/font-synthesis',
    'data/hyphenate-character',
    'data/hyphenate-limit-chars',
    'data/hyphenate-limit-last',
    'data/hyphenate-limit-lines',
    'data/hyphenate-limit-zone',
    'data/hyphens',
    'data/font-loading-api',
    'data/color-fonts'
  ], function (
    Version,
    browsers,
    marked,
    values,
    fontface,
    fontFeatureSettings,
    fontKerning,
    fontSizeAdjust,
    fontSynthesis,
    hyphenateCharacter,
    hyphenateLimitChars,
    hyphenateLimitLast,
    hyphenateLimitLines,
    hyphenateLimitZone,
    hyphens,
    fontLoadingApi,
    colorFonts) {
  function parseRange (str, browserVersions, currentIndex) {
    var tmp = str.split('-'),
        start = -1,
        end = -1;

    if (tmp.length === 1) {
      start = browserVersions.indexOf(Version.parse(tmp[0]));
      end = start;
    } else if (tmp.length === 2) {
      if (tmp[0] === "") {
        start = 0;
      } else {
        start = browserVersions.indexOf(Version.parse(tmp[0]));
      }

      if (tmp[1] === "") {
        end = browserVersions.size();
      } else {
        end = browserVersions.indexOf(Version.parse(tmp[1]));
      }
    } else {
      throw new Error('Range is not valid: "' + str + '".');
    }

    if (start === -1 || end === -1) {
      throw new Error('Bad browser support range: "' + str + '".');
    } else {
      return browserVersions.slice(start, Math.min(currentIndex, end) + 1);
    }
  }

  function findRelations(features, result) {
    features.forEach(function (feature) {
      result.push(feature.name);

      if (feature.features) {
        findRelations(feature.features, result);
      }
    });
  }

  function init(feature, parent) {
    if (!feature.name) {
      throw new Error('Feature does not have a name.');
    }

    if (parent) {
      feature.parent = parent;
    } else {
      feature.parent = null;
    }

    if (feature.browsers) {
      var tmp = {};

      feature.browsers.forEach(function (browser) {
        var id = browser.name

        if (browsers[id]) {
          if (!tmp[id]) {
            tmp[id] = [];
          }

          browser.range = parseRange(browser.range, browsers[id].versions, browsers[id].currentIndex);

          if (browser.range.size()) {
            tmp[id].push(browser);
          }
        } else {
          console.error('Feature "' + feature.name + '" uses an unknown browser: "' + id + '".');
        }
      });

      var result = [],
          notes = [];

      Object.keys(browsers).forEach(function (browserId) {
        if (tmp[browserId]) {
          result.push({
            id: browserId,
            name: browsers[browserId].name,
            support: tmp[browserId].map(function (data) {
              var entry = {
                range: data.range,
                value: values[data.support]
              };

              if (data.note) {
                var note = marked(data.note, { smartypants: true });
                entry.hasNote = true;

                if (notes.indexOf(note) !== -1) {
                  entry.note = notes.indexOf(note) + 1;
                } else {
                  notes.push(note);
                  entry.note = notes.length;
                }
              }

              return entry;
            })
          });
        }
      });
      feature.browsers = result;
      feature.notes = notes;
      if (feature.description) {
        feature.description = marked(feature.description, { smartypants: true });
      }
      feature.hasNotes = notes.length !== 0;
    } else {
      console.error('Feature "' + feature.name  + '" does not have browser support data.');
    }

    if (feature.features) {
      feature.features = feature.features.map(function (f) {
        return init(f, feature);
      });

      var seeAlso = [];
      feature.hasRelations = true;
      findRelations(feature.features, seeAlso);
      feature.seeAlso = seeAlso.sort(function (a, b) {
        return a.localeCompare(b);
      });

    }

    var path = [],
        current = feature;

    do {
      path.push(current.name);
      current = current.parent;
    } while (current !== null);

    feature.path = path.reverse();

    return feature;
  }

  return [
    init(fontface),
    init(fontFeatureSettings),
    init(fontKerning),
    init(fontSizeAdjust),
    init(fontSynthesis),
    init(hyphenateCharacter),
    init(hyphenateLimitChars),
    init(hyphenateLimitLines),
    init(hyphenateLimitZone),
    init(hyphens),
    init(fontLoadingApi),
    init(colorFonts)
  ];
});
