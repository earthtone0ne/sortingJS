function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  var splitPoint = Math.floor(wholeArray.length / 2); // 9
  var firstHalf = wholeArray.slice(0, splitPoint);
  var secondHalf = wholeArray.slice(splitPoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
	var resultArr = [];
	while(arr1.length && arr2.length) {
		if(arr1[0] < arr2[0]) {
			resultArr.push(arr1.shift());
		} else {
			resultArr.push(arr2.shift());
		}
	}
	return resultArr.concat(arr1, arr2);
}

function mergeSort(array) {
	var resultArr = [];
	if (array.length <=1){
		return array;
	}
	var splitArr = split(array);
	return resultArr.concat(merge(mergeSort(splitArr[0]), mergeSort(splitArr[1])));
	
}

function mergeCustom(arr1, arr2) {
	var resultArr = [];
	function comparator(a,b) {
		if (a>b ){ return 1}
		else if (a<b) {return -1}
		else return 0;
	}
	while(arr1.length && arr2.length) {
		if(comparator(arr1[0], arr2[0])===-1) {
			resultArr.push(arr1.shift());
		} else {
			resultArr.push(arr2.shift());
		}
	}
	return resultArr.concat(arr1, arr2);
}

// for (var i = 9; i <= 12; i++) {
//   var numItems = Math.pow(2, i);
//   var nativeTestArray = [];

//   for(var j = 0; j < numItems; j++) {
//     var rand = Math.floor(Math.random() * numItems);
//     nativeTestArray.push(rand);
//   }

//   var bTestArray = nativeTestArray.slice(0);
//   var mTestArray = nativeTestArray.slice(0);

//   console.time(numItems + ' native');
//   nativeTestArray.sort(function(a, b){ return a - b; });
//   console.timeEnd(numItems + ' native');

//   console.time(numItems + ' bubble');
//   bubbleSort(bTestArray);
//   console.timeEnd(numItems + ' bubble');

//   console.time(numItems + ' merge');
//   mergeSort(mTestArray);
//   console.timeEnd(numItems + ' merge');
// }
