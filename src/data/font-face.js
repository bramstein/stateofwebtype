define(function () {
  return {
    name: '@font-face',
    browsers: [
      'ie',      '-', 'yes', 'Internet Explorer 5, 6, 7, and 8 only support the Embedded OpenType (EOT) format. Internet Explorer 9 and above supports multiple formats.',
      'chrome',  '-', 'yes', null,
      'firefox', '-', 'yes', null,
      'safari',  '-', 'yes', null,
      'ios',     '-', 'yes', 'Safari for iOS 3.2 to 4.1 only support SVG fonts.',
      'opera',   '-', 'yes', null,
      'android', '-', 'yes', null
    ],
    features: [{
      name: 'font-family',
      browsers: [
        'ie',      '-', 'yes', 'Internet Explorer limits the length of a font-family to 32 characters.',
        'chrome',  '-', 'yes', null,
        'firefox', '-', 'yes', null,
        'safari',  '-', 'yes', null,
        'ios',     '-', 'yes', null,
        'opera',   '-', 'yes', null,
        'android', '-', 'yes', null
      ]
    }, {
      name: 'src',
      browsers: [
        'ie',      '5.5-8', 'partial', 'Internet Explorer 5.5 to 8 only support a single url.',
        'ie',      '9-',    'yes',     null,
        'chrome',  '-',     'yes',     null,
        'firefox', '-',     'yes',     null,
        'safari',  '-',     'yes',     null,
        'ios',     '-',     'yes',     null,
        'opera',   '-',     'yes',     null,
        'android', '-',     'yes',     null
      ]
    }, {
      name: 'font-weight',
      browsers: [
        'ie',      '-', 'yes', null,
        'chrome',  '-', 'yes', null,
        'firefox', '-', 'yes', null,
        'safari',  '-', 'yes', null,
        'ios',     '-', 'yes', null,
        'opera',   '-', 'yes', null,
        'android', '-', 'yes', null
      ]
    }, {
      name: 'font-style',
      browsers: [
        'ie',      '-', 'yes', null,
        'chrome',  '-', 'yes', null,
        'firefox', '-', 'yes', null,
        'safari',  '-', 'yes', null,
        'ios',     '-', 'yes', null,
        'opera',   '-', 'yes', null,
        'android', '-', 'yes', null
      ]
    }, {
      name: 'font-stretch',
      browsers: [
        'ie',      '5.5-8', 'no',  null,
        'ie',      '9-',    'yes', null,
        'chrome',  '-',     'no',  null,
        'firefox', '3.6-8', 'yes', 'Firefox 3.6 to 8 on Windows do not support font-stretch. The font-stretch property is supported from version 3.6 on all other platforms.',
        'firefox', '8-',    'yes', null,
        'safari',  '-',     'no',  null,
        'ios',     '-',     'no',  null,
        'opera',   '-',     'no',  null,
        'android', '-',     'no',  null
      ]
    }, {
      name: 'font-variant',
      browsers: [
        'ie',      '-', 'no', null,
        'chrome',  '-', 'no', 'Web fonts fail to render if font-variant is used within @font-face.',
        'firefox', '-', 'no', null,
        'safari',  '-', 'no', 'Web fonts fail to render if font-variant is used within @font-face.',
        'ios',     '-', 'no', 'Web fonts fail to render if font-variant is used within @font-face.',
        'opera',   '-', 'no', 'Web fonts fail to render if font-variant is used within @font-face.',
        'android', '-', 'no', 'Web fonts fail to render if font-variant is used within @font-face.'
      ]
    }, {
      name: 'font-feature-settings',
      browsers: [
        'ie',      '-',   'no',  null,
        'chrome',  '-',   'no',  null,
        'firefox', '-19', 'no',  null,
        'firefox', '20-', 'yes', null,
        'safari',  '-',   'no',  null,
        'ios',     '-',   'no',  null,
        'opera',   '-',   'no',  null,
        'android', '-',   'no',  null
      ]
    }, {
      // This needs a bit more work. We also need to define what support means.
      // Several browsers can use this property to define which characters are
      // supported by a web font, but don't use this information to download
      // only the web fonts that are needed.
      name: 'unicode-range',
      browsers: [
        'ie',      '-',      'no',  null,
        'chrome',  '-',      'yes', null,
        'firefox', '-',      'no',  null,
        'safari',  '-',      'yes', null,
        'ios',     '-',      'yes', null,
        'opera',   '-12.16', 'no',  null,
        'opera',   '15-',    'yes', null,
        'android', '-3',   'no',  null,
        'android', '4-',     'yes', null
      ]
    }]
  };
});
