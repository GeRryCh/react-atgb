const reduceProperty = (xs, groupBy, prop) => {
  return xs.reduce(function (rv, x) {
    rv[x[groupBy]] = rv[x[groupBy]] || 0;
    rv[x[groupBy]] += x[prop];
    return rv;
  }, {});
};

const calculateGrowth = (statistics) => {
  const processed = reduceProperty(statistics, 'Date', 'Cases');

  return Object.values(processed)
    .reduce((acc, curr) => {
      if (acc.prev === 0) {
        acc.prev = curr;
        return acc;
      }
      //growth in percent
      acc.growth.push((curr - acc.prev) / curr);
      acc.prev = curr;
      return acc;
    }, {
      growth: [],
      prev: 0
    }).growth;
};

export const getStatus = (stats) => {
  const growth = calculateGrowth(stats);
  if (growth.count < 2) {
    throw new Error('Unable to retrieve statistics');
  }

  console.log('growth', growth);
  return growth[1] < growth[0];
};