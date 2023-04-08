export const getDifferenceYear = (year) => {
  return new Date().getFullYear() - year;
};

export const calculateMark = (marca) => {
  let incremento;

  if (marca === '1') {
    incremento = 1.3;
  }

  if (marca === '2') {
    incremento = 1.15;
  }

  if (marca === '3') {
    incremento = 1.05;
  }

  return incremento;
};

export const calculatePlan = (plan) => {
  return plan === '1' ? 1.2 : 1.5;
};

export const formatMoney = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
