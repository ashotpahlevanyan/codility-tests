// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
	var res = 0;
	// write your code in JavaScript (Node.js 8.9.4)
	var binaryString = N.toString(2);
	var gapsArr = binaryString.split(/[\'1\']/);

	var end = gapsArr.length;
	if(binaryString[binaryString.length - 1] == '0') {
		end = gapsArr.length - 1;
	}

	for(var i = 0; i < end; i++) {
		if(gapsArr[i].length > res) {
			res = gapsArr[i].length;
		}
	}
	// console.log(N);
	// console.log(binaryString);
	// console.log(gapsArr);
	// console.log(res);
	return res;
}

solution(100);
solution(1086740);
solution(10357080);
solution(6);