/**
 * @file 【程序1】 
 * 题目：古典问题：有一对兔子，从出生后第3个月起每个月都生一对兔子，
 * 小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？ 
 */

let fib = n => {
    let a = 1,
        b = 1,
        sum = 0;
    for (let i = 0; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum;
        console.log(sum);
    }
    console.log(`when ${n} day after, there is ${sum} tuzi`);
};

fib(7);