import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(a) {
  if (aliveNeighbors(a) >= 1 && aliveNeighbors(a) <= 3) {
    return true;
  }

  return false;
}
