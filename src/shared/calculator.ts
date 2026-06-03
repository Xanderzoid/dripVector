import * as math from 'mathjs'

/** W% to ppm conversion for dry
 * @param wPercent W%
 * @returns ppm
 */
export function wToPpm(wPercent: number): number {
  return wPercent * 10000
}

/** Diluted aqueous solution W/W% to ppm conversion
 * The density of the solution is assumed to be 1 g/ml
 * @param wPercent W%
 * @returns ppm
 */
export function lwToPpm(concentration: number): number {
  return concentration * 10000
}
