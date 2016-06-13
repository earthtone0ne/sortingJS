describe('Split Array function', function() {
  it('is able to split a short array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]]); 
  });

  it('is able to split a long even array into two halves', function() {
    expect(split([20, 56, 1, 5, 2, 8])).toEqual([[20, 56, 1], [5, 2, 8]]); 
  });

  it('is able to split a long uneven array into two halves', function() {
    expect(split([7, 8, 1, 100, 78, 26, 93])).toEqual([[7, 8, 1], [100, 78, 26, 93]]); 
  });
});

describe('Merge', function(){
  it('is able to merge two empty arrays into one empty array', function(){
    // test the merging algorithm
    expect(merge([], [])).toEqual([]);
  });

  it('is able to merge two arrays of one element into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1], [2])).toEqual([1, 2]);
  });

  it('is able to merge two longer sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([5, 10, 20], [15, 45, 60])).toEqual([5, 10, 15, 20, 45, 60]);
  });

  it('is able to merge two longer sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([5, 10, 20], [15, 45, 60, 67, 78, 80, 92, 103, 157, 200, 500])).toEqual([5, 10, 15, 20, 45, 60, 67, 78, 80, 92, 103, 157, 200, 500]);
  });
});

describe('Merge Sort', function(){
  it('handles empty arrays', function(){
  	expect(mergeSort([])).toEqual([]);
  });

  it('is able to sort an array of two elements into one sorted array', function(){
    expect(mergeSort([4, 1])).toEqual([1, 4]);
  });

  it('is able to sort an array of many elements into one sorted array', function(){
    expect(mergeSort([20, 55, 68, 4, 1, 80, 11])).toEqual([1, 4, 11, 20, 55, 68, 80]);
  });  
});