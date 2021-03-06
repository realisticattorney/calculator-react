import calculate from '../../logic/Calculate';

const objOne = { total: null, next: null, operation: null };
const objTwo = { total: '3', next: null, operation: null };

describe('Logic methods', () => {
  it('Should be a function', () => {
    expect(typeof calculate).toEqual('function');
  });
  it('Should not be an object', () => {
    expect(typeof calculate).not.toEqual('object');
  });
  it('Should return an object', () => {
    const result = calculate(objOne, 9);
    expect(typeof result).toEqual('object');
  });
  it('Should total be a number', () => {
    const result = calculate(objTwo, 9);
    const value = (result.total * 1);
    expect(typeof value).toEqual('number');
  });
  it('Should return null object', () => {
    const result = calculate(objOne, 'AC');
    expect(result).toStrictEqual({ next: null, operation: null, total: null });
  });
  it('Should return a decimal value', () => {
    const result = calculate(objOne, '.');
    expect(result).toStrictEqual({ next: null, operation: null, total: '0.' });
  });
  it('Should return a negative value', () => {
    const result = calculate(objTwo, '+/-');
    expect(result).toStrictEqual({ next: -0, operation: null, total: -3 });
  });
  it('Should return a percent value', () => {
    const result = calculate(objTwo, '%');
    expect(result).toStrictEqual({ next: 0, operation: null, total: 0.03 });
  });
  it('Should return a negative value', () => {
    const result = calculate({ total: '3', next: '10', operation: '+' }, '=');
    expect(result.total * 1).toEqual(13);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a sustrated value', () => {
    const result = calculate({ total: '3', next: '10', operation: '-' }, '=');
    expect(result.total * 1).toEqual(-7);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a multiplied value', () => {
    const result = calculate({ total: '3', next: '10', operation: 'X' }, '=');
    expect(result.total * 1).toEqual(30);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a divided value', () => {
    const result = calculate({ total: '3', next: '10', operation: '/' }, '=');
    expect(result.total * 1).toEqual(0.3);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should not be a number divid by zero', () => {
    const result = calculate({ total: '3', next: '0', operation: '/' }, '=');
    expect(result.total * 1).toEqual(NaN);
    expect(typeof result.total).not.toEqual('number');
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
});
