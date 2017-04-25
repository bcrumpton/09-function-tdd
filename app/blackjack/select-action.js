import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function selectAction(a, b) {
  if (shouldSplit(a, b) === true) {
    return 'split';
  }
  if (shouldHit(a, b) === true) {
    return 'hit';
  }

  return 'stay';
}
