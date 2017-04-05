/**
 * @file 【程序9】 
 * 题目：一个数如果恰好等于它的因子之和，这个数就称为"完数"。
 * 例如6=1＋2＋3.编程 找出1000以内的所有完数。 
 */

let pernum = n => {
    let pn = {};
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        sum = 0;
        // 每次对sum进行清零处理
        for (let j = 1; j < i; j++) {
            if (i % j ===0) {
                sum += j;
            }
        }
        if (sum === i) {
            pn.push(i);
            sum = 0;
        }
    }
    console.log(pn); // 结果: 6 28 496
}