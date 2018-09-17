describe('Bubble Sort', function() {
  let testArray;
  beforeEach(() => {
    testArray = Array(10);
    for (let i = 0; i < 10; i++) {
      testArray.push(Math.random * 10);
    }
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array of 3 items', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('sorts an array of letters', function() {
    expect(bubbleSort(['f', 'c', 'g', 'l', 'z', 'B', 'F'])).toEqual([
      'B',
      'F',
      'c',
      'f',
      'g',
      'l',
      'z',
    ]);
  });
});
