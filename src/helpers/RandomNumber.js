const RandomNumber = () => {
  const max32BitInt = Math.pow(2, 31) - 1;
  let number = '';
  for (let i = 0; i < 9; i++) {
    number += Math.floor(Math.random() * 10);
  }

  return parseInt(number) % max32BitInt;
};

export { RandomNumber };
