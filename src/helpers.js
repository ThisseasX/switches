import { parseInt, max, difference, __ } from 'lodash/fp';

const parseState = (state) => parseInt(2, state.join(''));

const findMissingNumbers = (foundNumbers) => {
  const maxNum = max(foundNumbers);
  const projectedRange = Array(maxNum)
    .fill()
    .map((_, i) => i);

  return difference(projectedRange, foundNumbers);
};

const scrollBottom = () => (ref) => {
  if (ref) {
    ref.scrollTo(0, ref.scrollHeight);
  }
};

export { parseState, findMissingNumbers, scrollBottom };
