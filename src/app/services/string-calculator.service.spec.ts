import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return 1 for "1"', () => {
    expect(service.add('1')).toBe(1);
  });

  it('should return 6 for "1,5"', () => {
    expect(service.add('1,5')).toBe(6);
  });

  it('should handle new lines between numbers', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2,3')).toThrowError('Negative numbers not allowed: -2');
  });

  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add('//;\n1;-2;-3')).toThrowError('Negative numbers not allowed: -2, -3');
  });
});
