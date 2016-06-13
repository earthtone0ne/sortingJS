describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
   it('handles an array with one number', function(){
    expect( bubbleSort([10]) ).toEqual( [10] );
  });
  it('handles an array with many numbers', function(){
    expect( bubbleSort([20,10,40,60,3]) ).toEqual( [3,10,20,40,60] );
  });
});
