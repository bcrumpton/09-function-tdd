import cardSum from './card-sum';

export default function shouldHit(a, b) {
  if (cardSum(a, b) <= 17) {
    return true;
  }

  if (cardSum(a, b) > 17) {
    return false;
  }

  if (a === b) {
    return false;
  }
}
