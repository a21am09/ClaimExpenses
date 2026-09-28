import {describe, it, expect} from 'vitest';
import { calculateMileageExpense, formatDate, formatExpenseType, sumExpenses } from '../utils/expenseUtils';

describe('calculateMileageExpense', () => {
  it('should calculate the correct expense amount for given mileage', () => {
    expect(calculateMileageExpense(100)).toBe(55.00);
    expect(calculateMileageExpense(50)).toBe(27.50);
    expect(calculateMileageExpense(0)).toBe(0.00);
  });
  it('should return a number with two decimal places', () => {
    expect(calculateMileageExpense(123.456)).toBe(67.90);
    expect(calculateMileageExpense(78.9)).toBe(43.40);
  });
  it('should handle negative mileage values', () => {
    expect(calculateMileageExpense(-10)).toBe(0);
  });
  it('should return 0 for non-numeric input', () => {
    expect(calculateMileageExpense('abc')).toBe(0);
    expect(calculateMileageExpense(null)).toBe(0);
    expect(calculateMileageExpense(undefined)).toBe(0);
  });
});

describe('formatDate', () => {
  it('should return the date in format dd/mm/yyyy', () => {

    // Different separating characters
    expect(formatDate('2026-11-25')).toBe('25/11/2026');
    expect(formatDate('2026/11/25')).toBe('25/11/2026');
    expect(formatDate('2026.11.25')).toBe('25/11/2026');

    // Dates with single digit day or month
    expect(formatDate('2026-11-2')).toBe('02/11/2026');
    expect(formatDate('2026-11-02')).toBe('02/11/2026');
    expect(formatDate('2026-3-25')).toBe('25/03/2026');
    expect(formatDate('2026-03-25')).toBe('25/03/2026');
  });
})

describe('formatExpenseType', () => {
  it('should capitalise the first letter in the first word', () => {
    expect(formatExpenseType('mileage')).toBe('Mileage');
    expect(formatExpenseType('accommodation')).toBe('Accommodation');
    expect(formatExpenseType('sustenance')).toBe('Sustenance');
    expect(formatExpenseType('public transport')).toBe('Public transport');
    expect(formatExpenseType('other')).toBe('Other');
    expect(formatExpenseType('new extra option')).toBe('New extra option');
  })
})

describe('sumExpenses', () => {
  it('should return the sum total of monetary values', () => {
    const testExpenseSet1 = [
      {
        expenseType: 'mileage',
        description: 'Travel to training',
        date: '2026-03-05',
        inputValue: '100',
        monetaryValue: '55'
      },
      {
        expenseType: 'accommodation',
        description: 'Hotel',
        date: '2026-03-05',
        inputValue: '95',
        monetaryValue: '95'
      },
      {
        expenseType: 'sustenance',
        description: 'Evening meal',
        date: '2026-03-05',
        inputValue: '25',
        monetaryValue: '25'
      }
    ];
    const testExpenseSet2 = [
      {
        expenseType: 'mileage',
        description: 'Travel to training',
        date: '2026-03-05',
        inputValue: '85',
        monetaryValue: '46.75'
      },
      {
        expenseType: 'accommodation',
        description: 'Hotel',
        date: '2026-03-05',
        inputValue: '109.84',
        monetaryValue: '109.84'
      },
      {
        expenseType: 'sustenance',
        description: 'Evening meal',
        date: '2026-03-05',
        inputValue: '26.98',
        monetaryValue: '26.98'
      }
    ];

    expect(sumExpenses(testExpenseSet1)).toBe('175.00')
    expect(sumExpenses(testExpenseSet2)).toBe('183.57')
  });

  it('should return 0.00 with no expenses added', () => {
    const testExpenses3 = []

    expect(sumExpenses(testExpenses3)).toBe('0.00');
  })
})