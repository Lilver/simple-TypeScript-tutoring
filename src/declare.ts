//变量声明一共有两种
// let 以及 const
let a: string = ''; 
const b: number = 1;         
// 使用let做变量， const作为常量


// 项目中不要使用var！！！！！！！因为var本身作用域问题会导致一些奇怪的问题
for (var index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index);
    }, index * 1000);
}
// 结果将是 10 10 10 10 10 10 10 10 10 10 ，因为log引用了i这个同一个变量，使用let将不会产生该问题


// 在同一个代码块中重复声明会导致错误
function errFunc(): number {
    let num: number = 1;
    // let num: number = 233;   报错
    return num;
}

//结构赋值（数组）
let inputArray = [1, 2];
let [first, second] = inputArray;
console.log(first); // outputs 1
console.log(second); // outputs 2

//结构赋值（对象）
let inputObj = { myAge: 18, myName: 'Lilver' };
let { myAge, myName }: { myAge: number, myName: string } = inputObj;  //结构对象需要对应字段的匹配，【必要】时需要使用模式匹配


//通常结构赋值用于
// 1.引入其他包或者插件所导出的方法
import { log } from "util";

// 2.函数传入对象为一个复杂结构时候进行取值
const args1 = ['a1', 'a2'];
function func([a1, a2]: any): void {        //如果将any替换为[string, string]那么将会报错，因为args1对func来说是不可预知的类型
    console.log(a1);        //a1
    console.log(a2);        //a2
}
func(args1);


//展开操作符（神器） 与结构对应
//1. 取值
const args2 = ['a1', 'a2', 'a3'];
let [firstString, ...rest] = args2;
console.log(firstString); //a1
console.log(rest); //['a2', 'a3'];

//2. 复制对象（深拷贝）
const obj = {a: 'a1', b: 'b1'};
const objCopy = {...obj};  //深拷贝


//奇怪的例子
class C {
    p = 12;
    m() {
    }
  }
let c = new C();
let clone = { ...c };
clone.p; // ok
//clone.m();  无法获取到m，因为c对于是类C的实例，而实例中的方法是不可枚举的类型









