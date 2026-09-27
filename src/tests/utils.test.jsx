import {describe, it, expect} from 'vitest';
import { calculateMileageExpense, formatDate, formatExpenseType } from '../utils/expenseUtils';

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