// A function that finds what objects or values are missing from an array given a complete version of the array.
function findMissing(has, shouldHave) {
  const missing = [];
  for (let i = 0; i < shouldHave.length; i++) {
    let isThere = false;
    for (let j = 0; j < has.length; j++) {
      if (shouldHave[i] === has[j]) {
        isThere = true;
      }
    }
    if (!isThere) {
      missing.push(shouldHave[i]);
    }
  }
  return missing;
};
