const genRandomNumber = (start: number, end: number) => {
  return Math.round(start + (end - start) * Math.random())
}

export {
  genRandomNumber
}