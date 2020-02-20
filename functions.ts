function getSum(num1: number, num2: number): number {
	return num1 + num2;
}

console.log(getSum(1, 4));

let mySum = (num1: number, num2: any): number => {
	if (typeof num2 == 'string') num2 = parseInt(num2);
	return num1 + num2;
};

console.log(mySum(3, `5`));

let getName = (firstName: string, lastName?: string): string =>
	`${firstName} ${lastName}`;

console.log(getName(`John`, `Doe`));
console.log(getName(`John`));

let myvoid = (): void => {
	return;
};
