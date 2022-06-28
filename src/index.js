module.exports = function reverse (n) {
  let modN = String(n > 0 ? n : -n);
  let newN = '';
  for(let i = modN.length - 1; i >= 0; i--) {
    newN += modN[i];
  }
  return +newN;
}
