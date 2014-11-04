define(function () {
  function VersionArray(data) {
    this.data = data;
  }

  VersionArray.prototype.size = function () {
    return this.data.length;
  };

  VersionArray.prototype.slice = function (start, end) {
    return new VersionArray(this.data.slice(start, end));
  };

  VersionArray.prototype.forEach = function (fn) {
    return this.data.forEach(fn);
  };

  VersionArray.prototype.map = function (fn) {
    return this.data.map(fn);
  };

  VersionArray.prototype.indexOf = function (version) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].eq(version)) {
        return i;
      }
    }
    return -1;
  };

  VersionArray.prototype.toString = function () {
    if (this.data.length !== 1) {
      return this.data[0].toString() + ' – ' + this.data[this.data.length - 1].toString();
    } else {
      return this.data[0].toString();
    }
  };

  return VersionArray;
});
