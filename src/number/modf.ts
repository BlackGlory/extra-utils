export function modf(value: number): [integralPart: number, fractionalPart: number] {
  const fractionalPart = value % 1
  const integralPart = Math.round(value - fractionalPart)
  return [integralPart, fractionalPart]
}
