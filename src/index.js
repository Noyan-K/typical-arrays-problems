
exports.min = function min (array) {
  if (array !== undefined && array.length !== 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array !== undefined && array.length !== 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  return (!array || array.length === 0) ? 0 : array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}
