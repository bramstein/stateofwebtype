define(function () {
  return {
    name: 'font-feature-settings',
    browsers: [
      'ie',      '-9',     'no',      null,
      'ie',      '10-',    'yes',     null,
      'chrome',  '-32',    'no',      'Applying OpenType features stops web fonts from working.',
      'chrome',  '33-',    'yes',     'Chrome does not enable any of the required default OpenType features.',
      'firefox', '3.6',    'no',      null,
      'firefox', '4-',     'yes',     'Combinations of stylistic sets do not render properly before Firefox 15.',
      'safari',  '-5',     'no',      null,
      'safari',  '6-',     'partial', 'Safari supports OpenType features and the font-feature-settings syntax but ignores any values. Instead it explicitly enables a select number of features.',
      'ios',     '-5',     'no',      null,
      'ios',     '6-',     'partial', 'Safari on iOS supports OpenType features and the font-feature-settings syntax but ignores any value. Instead it explicitly enabled a select number of features.',
      'opera',   '-12.16', 'no',      null,
      'opera',   '15-',    'yes',     null,
      // Android needs more investigation. Is there such a thing as a
      // default browser on 4.4, or is it Chrome?
      'android', '-4.3',   'no',      null,
      'android', '4.4-',   'yes',     null
    ],
    features: [{
      name: 'liga',
      description: 'Standard Ligatures',
      browsers: [
        'ie',      '-9',   'no', null,
        'ie',      '10-',  'yes', null,
        'chrome',  '-32',  'no', null,
        'chrome',  '33',   'partial', 'Chrome 33 does not apply ligatures if they contain a space. This bug was fixed in Chrome 34.',
        'chrome',  '34-',  'yes', null,
        'firefox', '3.6',, 'no', null,
        'firefox', '4-22', 'partial', 'Firefox 4 to 22 do not render ligatures with spaces correctly.',
        'firefox', '23-',  'yes', null,
        'safari',  '-5',   'no', null,
        'safari',  '6-',   'yes', 'Ligatures are always enabled.',
        'ios',     '-6',   'no', null,
        'ios',     '7-', 'yes', 'Ligatures are always enabled.',
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'clig',
      description: 'Contextual Ligatures',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-5', 'no', null,
        'safari',  '6-', 'yes', 'Contextual ligatures are always enabled.',
        'ios',     '-6', 'no', null,
        'ios',     '7-', 'yes', 'Ligatures are always enabled.',
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'dlig',
      description: 'Discretionary Ligatures',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'hlig',
      description: 'Historical Ligatures',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'rlig',
      description: 'Required Ligatures',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-5', 'no', null,
        'safari',  '6-', 'yes', 'Required ligatures are always enabled.',
        'ios',  '-5', 'no', null,
        'ios',  '6-', 'yes', 'Required ligatures are always enabled.',
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null      
      ]
    }, {
      name: 'c2sc',
      description: 'Small Capitals From Capitals',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'pcap',
      description: 'Petite Capitals',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'unic',
      description: 'Unicase',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'case',
      description: 'Case-Sensitive Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'titl',
      description: 'Titling',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'lnum',
      description: 'Lining Numbers',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'onum',
      description: 'Oldstyle Numbers',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'pnum',
      description: 'Proportional Numbers',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'tnum',
      description: 'Tabular Numbers',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'zero',
      description: 'Slashed Zero',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'sups',
      description: 'Superscript',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'subs',
      description: 'Subscript',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'sinf',
      description: 'Scientific Inferiors',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'numr',
      descriptions: 'Numerators',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'dnom',
      descriptions: 'Denominators',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'ordn',
      descriptions: 'Ordinals',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'frac',
      descriptions: 'Fractions',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-33', 'no', null,
        'chrome',  '34-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-20', 'no', null,
        'opera',   '21-', 'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'afrc',
      description: 'Alternative Fractions',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-33', 'no', null,
        'chrome',  '34-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-20', 'no', null,
        'opera',   '21-', 'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'kern',
      description: 'Kerning',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-6', 'no', null,
        'safari',  '7-', 'yes', 'Kerning is always enabled.',
        'ios',     '-6', 'no', null,
        'ios',     '7-', 'yes', 'Ligatures are always enabled.',
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'cpsp',
      description: 'Capital Spacing',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'init',
      description: 'Initial Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'medi',
      description: 'Medial Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'fina',
      description: 'Terminal Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'isol',
      description: 'Isolated Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'locl',
      description: 'Localized Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-36', 'no', null,
        'chrome',  '37-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-23', 'no', null,
        'opera',   '24-', 'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'hist',
      description: 'Historical Forms',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'ornm',
      description: 'Ornaments',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'swsh',
      description: 'Swashes',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'cswh',
      description: 'Contextual Swash',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'calt',
      description: 'Contextual Alternates',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-5', 'no', null,
        'safari',  '6-', 'yes', 'Contextual alternates are always enabled.',
        'safari',  '-5', 'no', null,
        'safari',  '6-', 'yes', 'Ligatures are always enabled in Safari.',
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'salt',
      description: 'Stylistic Alternates',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }, {
      name: 'ssxx',
      description: 'Stylistic Sets',
      browsers: [
        'ie',      '-9', 'no', null,
        'ie',      '10-', 'yes', null,
        'chrome',  '-32', 'no', null,
        'chrome',  '33-', 'yes', null,
        'firefox', '3.6', 'no', null,
        'firefox', '4-', 'yes', null,
        'safari',  '-', 'no', null,
        'ios',     '-', 'no', null,
        'opera',   '-12.16', 'no', null,
        'opera',   '15-',   'yes', null,
        'android', '-', 'no', null
      ]
    }]
  };
});
