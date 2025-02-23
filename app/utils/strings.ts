export const pluralize = (value: number, forms: string[]): string => {
  if (value % 10 === 1 && value % 100 !== 11) {
    return forms[0];
  }

  const lastDigit = value % 10;
  const lastTen = value % 100;

  if (lastDigit >= 2 && lastDigit <= 4 && (lastTen < 10 || lastTen >= 20)) {
    return forms[1];
  }

  return forms[2];
};
