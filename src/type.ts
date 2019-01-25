
// 冒号后面用于对类型进行控制
let myBoolean: boolean = false;                 //布尔类型

let myNumber: number = 17;                      //数字类型

let myString: string = 'Lilver';                //字符串类型

let myArray: number[] = [1, 2, 3, 5, 6];        //数组类型（1.简单粗暴直接接上[]）
let anotherMyArray: Array<number> = [1, 2, 3, 4, 5]       //2.使用泛型

let myTuple: [number, string] = [1, 'aaa'];     //元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

enum Color {Red, Green, Blue};                  //枚举类型
let c:Color = Color.Green;              

let myPlugin:any = 4; // any类型
//我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
//在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
//Object类型的变量只是允许你给它赋任意值，但是却不能够在它上面调用任意的方法，即便它真的有这些方法，但是any可以
//但是尽可能在代码中少用any！！！！！！！！！！！！！！

function myFunc(): void {                           //空类型，通常是一些无返回的函数
    console.log("This is my warning message");
}


// 返回never的函数必须存在无法达到的终点
function myError(message: string): never {            //never类型
    throw new Error(message);
}

let someValue: any = "this is a string";                //断言，可以跳过ts检查器的类型检查,前提是你已经确信所获取的类型，不然将导致严重的bug
let strLength1: number = (<string>someValue).length;     //一种是尖括号
let strLength2: number = (someValue as string).length;   //一种是as











