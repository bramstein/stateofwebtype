define(function () {
  return {
    name: 'hyphenate-character',
    browsers: [
      'ie',      '-',   'no',  null,
      'chrome',  '-',   'yes', null,
      'firefox', '-',   'no',  null,
      'safari',  '-',   'yes', null,
      'ios',     '-',   'yes', null,
      'opera',   '-12', 'no',  null,
      'opera',   '15-', 'yes', null,
      'android', '-3',  'no',  null,
      'android', '4-',  'yes', null
    ]
  };
});
