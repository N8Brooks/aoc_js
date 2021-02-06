export function comp(real = 0, imag = 0) {
  return [real, imag];
}

export function add([aReal, aImag], [bReal, bImag]) {
  return [aReal + bReal, aImag + bImag];
}

export function sub([aReal, aImag], [bReal, bImag]) {
  return [aReal - bReal, aImag - bImag];
}

export function mult([aReal, aImag], [bReal, bImag]) {
  return [aReal * bReal - aImag * bImag, aReal * bImag + aImag * bReal];
}

export function manhattan([aReal, aImag], [bReal, bImag] = [0, 0]) {
  return Math.abs(aReal - bReal) + Math.abs(aImag - bImag);
}
