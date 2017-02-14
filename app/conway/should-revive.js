import aliveNeighbors from './alive-neighbors';

export default function shouldRevive(a) {
  if (aliveNeighbors(a) === 3) {
    return true;
  }

  return false;
}
