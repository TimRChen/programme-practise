// 判断一个数是否为质数

// data < 100
/*function main(data) {
	for (var i = 2; i < data; i++) {
		if (data % i === 0) {
			console.log('data is not prime');
			return 0;
		} else {
			console.log(data + ' is prime');
		}
	}
}
main(3);*/

// 升级：有这样一个数，它可由两个质数的和组成，且这两个质数不唯一。
// 例如: 10 = 5 + 5 or 10 = 3 + 7
// 问题：请设计一个程序，输入一个数，判断并输出和等于它的质数对总数


function main(data) {
	var count = 0;
	for (var i = 1; i < data; i++) {
		var j = data - i;
		if (i <= j && i > 2) {
			if (i % 2 !== 0 && j % 2 !== 0 && i % 3 !== 0 && j % 3 !== 0 && i % 5 !== 0 && j % 5 !== 0 && i % 7 !== 0 && j % 7 !== 0) {
				count++;
			}
		} else if (i === 2) {
			if (j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0) {
				count++;
			}
		}
	}
	console.log('the count is ' + count);
}


main(7);