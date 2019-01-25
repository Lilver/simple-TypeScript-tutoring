//接口的作用就是为类型命名和为你的代码或第三方代码定义契约。
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//接口的作用不是其他oo语言中用于实现接口，而是对于一些参数或者变量进行类型控制



//可用 ？来添加一些动态可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {         //  { color: string; area: number }表示返回类型
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。


// readonly用于对一些对象创建时进行属性控制，实例化以后无法再改变
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5;     error!


// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。



//接口函数类型，（）表示参数，冒号后表示返回值， 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 
interface SearchFunc {
    (source: string, subString: string): boolean;
}


//并没有按照接口的字段名，但是对应的类型符合也是可以通过ts检查器的
let notSameArgFunc: SearchFunc;
notSameArgFunc = function(src: string, sbs: string): boolean {
    return true;
}


//索引类型
interface StringArray {
    [index: number]: string;    //[index: number]被称为索引签名，目前ts支持两种索引签名，字符串和数字
}

let strArray: StringArray;
strArray = ['a', 'b', 'c'];


//对索引类型进行readonly设置可以防止对索引类型进行更改
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArrayReadonly: ReadonlyStringArray = ["Alice", "Bob"];
// myArrayReadonly[2] = "Mallory";  error!












