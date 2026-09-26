const mileageRate = 0.55;

// Calculate the expense amount based on mileage given
export function calculateMileageExpense(miles) {
  return Number((miles * mileageRate).toFixed(2));
}

// Determine the value of the expense based on the type of expense
export function expenseValue(expenseType, inputValue) {
  if (expenseType === 'mileage') {
    return calculateMileageExpense(inputValue);
  }
  return Number(inputValue).toFixed(2);
}