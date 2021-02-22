export function pair(x, y) {
  const ux = x < 0 ? -2 * x - 1 : 2 * x;
  const uy = y < 0 ? -2 * y - 1 : 2 * y;
  return uy > ux ? uy * uy + ux : ux * ux + ux + uy;
}

export function unpair(z) {
  const isqrt = Math.floor(Math.sqrt(z));
  const prfsq = isqrt * isqrt;
  const [ux, uy] = isqrt > z - prfsq ? [z - prfsq, isqrt] : [isqrt, z - prfsq - isqrt];
  return [ux % 2 ? (ux + 1) / -2 : ux / 2, uy % 2 ? (uy + 1) / -2 : uy / 2];
}
