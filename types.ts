console.log(`Hello from TS`);

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let strArr: string[];
let numArr: Array<number>;
let newArr: Array<string>; // ovo je bolje

let strNumTuple: [string, number];

myString = `Hello World`.slice(0, 3);
myNum = -22 + 5.5;
myBool = true;
myVar = 0xf00; // `Hello World` true

console.log(myString, myNum, myVar);

strArr = [`Hello`, `World`];
numArr = [];
numArr.push(1);
numArr.push(2);
newArr = [`Hello`, `World`];

strNumTuple = [`Hello`, 4];

console.log(strArr);
console.log(numArr);

let myVoid: void = null; // undefined
let myNull: null = null;
let myUndefined: undefined = undefined;
