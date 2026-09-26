const mileageRate = 0.55;

// Calculate the expense amount based on mileage given
export function calculateMileageExpense(miles) {
    if (
        // Checks for typeof and isNaN as Number() of a string will return a number
        miles <= 0 ||
        typeof Number(miles) !== 'number' ||
        isNaN(Number(miles))) {
        return 0
    }
  return Number((miles * mileageRate).toFixed(2));
}

// Determine the value of the expense based on the type of expense
export function expenseValue(expenseType, inputValue) {
  if (expenseType === 'mileage') {
    return calculateMileageExpense(inputValue);
  }
  return Number(inputValue).toFixed(2);
}