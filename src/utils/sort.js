const by = (name) => {
  return (o, p) => {
    let a, b;
    if (typeof o === 'object' &&
      typeof p === 'object' && o && p) {
      a = o[name];
      b = p[name];
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw new Error('Expected an object when sorting by ' + name);
    }
  };
};

export default by;