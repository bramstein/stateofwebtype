define(function () {
  function Version(major, minor, patch) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  Version.TOKENIZER = new RegExp(
    "^" +
    "([0-9]+)" +            // major
    "(?:" +
      "[\\._-]([0-9]+)" +   // minor
    ")?" +
    "(?:" +
      "[\\._-]([0-9]+)" +  // patch
    ")?$"
  );

  Version.prototype.compare = function (version) {
    if (this.major > version.major ||
        ((this.major === version.major && this.minor > version.minor) ||
         (this.major === version.major && this.minor === version.minor && this.patch > version.path))) {
      return 1;
    } else if (this.major < version.major ||
               ((this.major === version.major && this.minor < version.minor) ||
                (this.major === version.major && this.minor === version.minor && this.patch < version.patch))) {
      return -1;
    } else {
      return 0;
    }
  };

  Version.prototype.isValid = function () {
    return this.major !== null;
  };

  Version.prototype.ge = function (version) {
    return this.compare(version) === 1;
  };

  Version.prototype.lt = function (version) {
    return this.compare(version) === -1;
  };

  Version.prototype.ge = function (version) {
    return this.compare(version) === 0 || this.compare(version) === 1;
  };

  Version.prototype.le = function (version) {
    return this.compare(version) === 0 || this.compare(version) === -1;
  };

  Version.prototype.eq = function (version) {
    return this.compare(version) === 0;
  };

  Version.prototype.ne = function (version) {
    return this.compare(version) !== 0;
  };

  Version.prototype.toString = function () {
    return [this.major, this.minor && ('.' + this.minor) || '', this.patch && ('.' + this.patch) || ''].join('');
  };

  Version.parse = function (str) {
    var match = Version.TOKENIZER.exec(str),
        major = null,
        minor = null,
        patch = null;

    if (match) {
      if (match[1] !== null && !!match[1]) {
        major = parseInt(match[1], 10);
      }

      if (match[2] !== null && !!match[2]) {
        minor = parseInt(match[2], 10);
      } else {
        minor = 0;
      }

      if (match[3] !== null && !!match[3]) {
        patch = parseInt(match[3], 10);
      } else {
        patch = 0;
      }
    }

    return new Version(major, minor, patch);
  };

  return Version;
});
