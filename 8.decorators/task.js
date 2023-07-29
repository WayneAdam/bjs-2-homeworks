//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;

  return (...args) => {
    const hash = args.join(",");
    let searchingObjectInCache = cache.find((item) => {
      if (hash in item) {
        return item;

      }

    });

    if (searchingObjectInCache) {
      return "Из кэша: " + searchingObjectInCache[hash];

    }

    const result = func(...args);
    let newObjest = {};
    newObjest[hash] = result;
    cache.push(newObjest);

    if (cache.length > maxCacheValuesCount) {
      cache.shift();

    }

    return "Вычисляем: " + result;
    
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay)
  }

  return wrapper;
}