function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num2 == 'string')
        num2 = parseInt(num2);
    return num1 + num2;
};
console.log(mySum(3, "5"));
var getName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(getName("John", "Doe"));
console.log(getName("John"));
var myvoid = function () {
    return;
};
