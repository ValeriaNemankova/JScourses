//1
function maxNumber(a, b){
    if (a > b){
        return true;
    } else {
        return false;
    }
}

//2
function newStr(str){
    return "Вы вывели " + str;
}

//3
function checkValue(element) {
    if(element === null) {
        return "input element is null";
    } else if(element === undefined) {
        return "input element is undefined";
    } else {
        return "input element is " + element;
    }
}

//4
function fieldObject(obj) {
    obj.checked = true;
    console.log(obj);
}

//5
function newArray(n) {
    for (var i = 0; i <= n; i++){
        console.log(i);
    }
    for (var j = n; j >= 0; j--) {
        console.log(j);
    }
}

console.log(maxNumber(3,5));
console.log(maxNumber(5,2));
console.log(newStr("hello"));
console.log(checkValue(null));
console.log(checkValue());
console.log(checkValue(345));
var objec={'a' : 3};
fieldObject(objec);
console.log(newArray(4));