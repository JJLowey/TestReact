import App from './App';

test('fake Test', () => {
  expect(true).toBeTruthy()
});

describe('Testing App root component', () => {
   
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});