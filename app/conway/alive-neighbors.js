export default function aliveNeighbors(a) {
  let alive = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i]) {
      alive += 1;
    }
  }

  return alive;
}
