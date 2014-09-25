define(function () {
  return {
    name: 'font-kerning',
    browsers: [
      'ie',      '-',  'no',  null,
      'chrome',  '-',  'no',  null,
      'firefox', '-',  'no',  null,
      'opera',   '-',  'no',  null,
      'safari',  '-6', 'no',  null,
      'safari',  '7-', 'yes', 'Safari has kerning enabled by default, so font-kerning can only be used to turn off kerning.',
      'ios',     '-6', 'no',  null,
      'ios',     '7-', 'yes', null,
      'android', '-',  'no',  null
    ]
  };
});
