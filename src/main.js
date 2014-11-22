require(['mustache', 'browsers', 'features'], function (Mustache, browsers, features) {
  var featureTemplate = document.getElementById('feature').innerHTML,
      resultCountTemplate = document.getElementById('count').innerHTML,
      indexTemplate = document.getElementById('index-template').innerHTML,
      resultCountWrapper = document.getElementById('result-count'),
      resultsWrapper = document.getElementById('results'),
      splashWrapper = document.getElementById('splash-page'),
      indexWrapper = document.getElementById('index'),
      aboutWrapper = document.getElementById('about'),
      search = document.getElementById('search');

  function walk(features, fn) {
    features.forEach(function (feature) {
      fn(feature);

      if (feature.features) {
        walk(feature.features, fn);
      }
    });
  }

  function find(input) {
    var result = [],
        searchValue = input.toLocaleLowerCase();

    walk(features, function (feature) {
      var keywords = feature.keywords || [];

      keywords.push(feature.name);

      for (var i = 0; i < keywords.length; i++) {
        if (keywords[i].toLocaleLowerCase().indexOf(searchValue) !== -1) {
          result.push(feature);
          break;
        }
      }
    });

    return result.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  function debounce(fn, n) {
    var timeout,
        args;

    return function () {
      args = arguments;

      var later = function () {
        timeout = null;
        fn.apply(null, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, n);
    };
  }

  function showResults(features) {
    resultsWrapper.innerHTML = features.map(function (feature) {
      return Mustache.render(featureTemplate, feature);
    }).join('');

    resultCountWrapper.innerHTML = Mustache.render(resultCountTemplate, { number: features.length, singular: features.length === 1 });

    document.documentElement.classList.add('search');
  }

  function hideResults() {
    document.documentElement.classList.remove('search');
    resultsWrapper.innerHTML = '';
    resultCountWrapper.innerHTML = '';
  }

  function showIndex() {
    var tmp = {},
        index = [];

    walk(features, function (feature) {
      var firstChar = feature.name.charAt(0).toLocaleLowerCase();

      if (!tmp[firstChar]) {
        tmp[firstChar] = [];
      }

      tmp[firstChar].push(feature.name);
    });

    Object.keys(tmp).forEach(function (c) {
      index.push({
        index: c,
        entries: tmp[c]
      });
    });

    index.sort(function (a, b) {
      return a.index.localeCompare(b.index);
    });

    indexWrapper.innerHTML = Mustache.render(indexTemplate, { index: index });
    document.documentElement.classList.add('splash');
  }

  function hideIndex() {
    document.documentElement.classList.remove('splash');
  }

  var updateHash = debounce(function () {
    location.hash = "#" + encodeURIComponent(search.value.trim());
  }, 1000);

  function onHashChange() {
    var hash = decodeURIComponent(location.hash.replace('#', ''));

    if (!/^\s*$/g.test(hash)) {
      search.value = hash;
      showResults(find(hash.trim()));
      hideIndex();
    } else {
      search.value = '';
      hideResults();
      showIndex();
    }
  }

  search.addEventListener('input', function (e) {
    var input = search.value.trim();

    if (input !== "") {
      var results = find(input);

      hideIndex();
      showResults(find(input));
    } else {
      hideResults();
      showIndex();
    }
    updateHash();
  }, true);

  onHashChange();

  window.onhashchange = onHashChange;
});
