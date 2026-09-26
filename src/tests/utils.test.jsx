import {describe, it, expect} from 'vitest';
import { calculateMileageExpense } from '../utils/expenseUtils';

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