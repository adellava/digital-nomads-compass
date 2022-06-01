import scoreToPercentage from 'utils/scoreToPercentage'

describe('floatToPercentage', () => {
  test('should return a string percentage rounded with 1 digit from a score out of 10', () => {
    expect(scoreToPercentage(4.9)).toBe('49.0')
    expect(scoreToPercentage(3)).toBe('30.0')
    expect(scoreToPercentage(0)).toBe('0.0')
    expect(scoreToPercentage(1.1111)).toBe('11.1')
    expect(scoreToPercentage(10)).toBe('100.0')
  })
})
