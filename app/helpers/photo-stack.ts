export const STACK_DEPTH = 4;

export function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function isLeftHalf(clientX: number, rect: DOMRect) {
  return clientX < rect.left + rect.width / 2;
}

export function layerTransform(depth: number) {
  if (depth === 0) {
    return "translate3d(0, 0, 0)";
  }

  const dir = depth % 2 === 0 ? 1 : -1;
  const x = dir * depth * 5;
  const y = depth * 8;
  const rotate = dir * (1.2 + depth * 1.1);

  return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
}
