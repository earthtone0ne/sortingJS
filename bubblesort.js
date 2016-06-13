function bubbleSort(argument) {
	var holder ;
	var swaps = 0;
	if(argument.length>=2){
		for (var i = 0; i < argument.length-1; i++) {
			if (argument[i]>argument[i+1]){
				holder=argument[i];
				argument[i]=argument[i+1];
				argument[i+1]=holder;
				swaps++;
			}
		}
		if(swaps !== 0) {
			return bubbleSort(argument);
		}
	}
	return argument;
}