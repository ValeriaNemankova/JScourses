(function() {

    function checkUndefined(element){
        if (element === undefined) {
            return true;
        } else {
            return false;
        }
    }

    
    function checkNull(element){
        if (element === null) {
            return true;
        } else {
            return false;
        }
    }


    function checkNaN(element) {
        if (isNaN(element)) {
            return true;
        } else {
            return false;
        }
    }


    function checkEmptyObj(object) {
        for (var propert in object) {
           return false;
        } 
        return true;
    }


    function trasformObj(object) {
        for (var propert in object) {
            object[propert] = null;
        }
        return object;
    }


    function randNumber(rangeA, rangeB) {
        return Math.floor(Math.random() * (rangeB - rangeA)) + rangeA;
    }


    function fullCompare(object1, object2){
        if (object1 === object2){
            return true;
        }

        if (object1 == null || typeof object1 != "object" ||
            object2 == null || typeof object2 != "object"){
            return false;
        }
 
        var propsOb1 = 0, propsOb2 = 0;
  
        for (var prop in object1){
            propsOb1 += 1;
        }

        for (var prop in object2) {
          propsOb2 += 1;
          if (!(prop in object1) || !fullCompare(object1[prop], object2[prop])){
            return false;
          }     
        }
  
        return propsOb1 == propsOb2;
    }


    function removeObjProper(object){
        for (var key in object) {
            if (checkNull(object[key]) === false) {
                delete object[key];
            }
        }
        return object;
    }


})();

/*
console.log(checkUndefined(3));
console.log(checkUndefined());

console.log(checkNull(45));
console.log(checkNull(null));

var expr = "Hello" / 15315;
console.log(checkNaN(expr));
console.log(checkNaN(456));

var obj1 = {field: 653};
var obj2 = {};
console.log(checkEmptyObj(obj1));
console.log(checkEmptyObj(obj2));

var newObj = {1: "my", 2: "name", 3: 345};
console.log(trasformObj(newObj));

console.log(randNumber(3,10));

var ob1 = {1: 45, 2: 55};
var ob2 = {1: 45, 2: 55};
console.log(fullCompare(obj1, obj2));
console.log(fullCompare(ob1, ob2));

console.log(removeObjProper(newObj));
console.log(removeObjProper(obj1));
*/