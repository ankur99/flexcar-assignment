import { isValidZip, sortVehicles } from '@/lib/utils'

describe('isValidZip', () => {
  it('accepts 5 digits', () => {
    expect(isValidZip('02116')).toBe(true)
    expect(isValidZip('10001')).toBe(true)
  })
  it('rejects invalid', () => {
    expect(isValidZip('2116')).toBe(false)
    expect(isValidZip('0211a')).toBe(false)
    expect(isValidZip('021160')).toBe(false)
  })
})

describe('sortVehicles', () => {
  const data = [
    { model: 'Camry', price: 20000 },
    { model: 'Accord', price: 22000 },
    { model: 'Civic', price: 18000 },
  ]

  it('price asc', () => {
    const res = sortVehicles(data, 'price-asc')
    expect(res.map(v => v.price)).toEqual([18000, 20000, 22000])
  })

  it('price desc', () => {
    const res = sortVehicles(data, 'price-desc')
    expect(res.map(v => v.price)).toEqual([22000, 20000, 18000])
  })

  it('model alpha', () => {
    const res = sortVehicles(data, 'model')
    expect(res.map(v => v.model)).toEqual(['Accord', 'Camry', 'Civic'])
  })
})
