function sumItems(array) {
  let tmp = array[0];

  if (tmp == null || array == null) return 0;
  else if (array.length === 1 && !Array.isArray(tmp)) return tmp;
  else if (!Array.isArray(tmp)) {
    array.shift();
    return tmp + sumItems(array);
  }
  else {
    array.shift();
    return sumItems(tmp) + sumItems(array);
  }
}
