const sorted = (array ) => array.sort((a, b) => a - b);
const validate = (array) =>  ( !array || array.length === 0 );

exports.min = function min (array) {
  return !validate(array) ? sorted(array)[0] : 0;
}

exports.max = function max (array) {
  return !validate(array) ? sorted(array)[array.length - 1] : 0;
}

exports.avg = function avg (array) {
  return !validate(array) ? array.reduce( (acc, cur) => acc + cur, 0 ) / array.length : 0;
}
