const scoreToPercentage = (float: number): string => {
  return (float * 10).toFixed(1)
}

export default scoreToPercentage