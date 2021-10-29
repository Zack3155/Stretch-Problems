const eqObjects = function (object1, object2) {

  if (object1 === object2) {
    return true;
  }

  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if (key1.length != key2.length) return false;

  for (const key of key1)
    if (!key2.includes(key) ||
      !eqObjects(object1[key], object2[key]))
      return false;

  return true;

}
