import * as calculator from '../calculator'

test('wToPpm', () => {
  expect(calculator.wToPpm(1)).toBe(10000)
})

test('lwToPpm', () => {
  expect(calculator.lwToPpm(1)).toBe(10000)
})
