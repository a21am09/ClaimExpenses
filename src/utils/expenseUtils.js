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

// Format dates into dd/mm/yyyy
export function formatDate(date) {
  const dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear()

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

    return (
      `${day}/${month}/${year}`
    )
}

// Format expense types with capitals
export function formatExpenseType(expenseType) {
  return String(expenseType).charAt(0).toUpperCase() + String(expenseType).slice(1);
}

export function sumExpenses(expenses) {
  const sum = expenses.reduce((cumulativeTotal, expense) => {
    return cumulativeTotal + Number(expense.monetaryValue)
  }, 0)
  return Number(sum).toFixed(2);
}