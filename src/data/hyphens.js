define(function () {
  return {
    name: 'hyphens',
    browsers: [
      'ie',      '-9',   'no',      null,
      'ie',      '10-',  'yes',     null,

      // This needs further testing. The property is supported from at least Chrome 14,
      // so at which version was it introduced.
      'chrome',  '-',    'no',      'It supports the property but does not ship with any hyphenation dictionaries.',
      'firefox', '-5',   'no',      null,
      'firefox', '6-',   'yes',     null,
      'safari',  '-5',   'no',      null,
      'safari',  '5.1-', 'yes',     null,
      'ios',     '-4.1', 'no',      null,
      'ios',     '4.3-', 'yes',     null,
      'opera'    '-',    'no',      null,
      'android', '-3',   'no',      null,
      'android', '4-',   'partial', 'It supports the property but does not ship with any hyphenation dictionaries.'
    ]
  };
});
