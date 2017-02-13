import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function selectAction() {
  if (shouldSplit === true) {
    return 'split';
  }
  if (shouldHit === true) {
    return 'hit';
  }

  return 'stay';
}
