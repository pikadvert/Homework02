/* БЛОК 2 */

const name = 'Vasya';
console.log (`hello ${name}!`)

const name = 123;
if (typeof name === 'string') {
console.log (`hello ${name}!`);
} else {
console.log('Ошибка, не тот тип данных');
}

console.log(typeof 1); // number
console.log(typeof NaN); // number
console.log(typeof 'String'); // string
console.log(typeof true); // boolean
console.log(typeof false); //boolean
console.log(typeof {name: 'Pavel'}); //  object
console.log(typeof null); // object
console.log(typeof undefined); // undefine
  
/* БЛОК 3 */

/* _________№1__________ */
elements =  ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(elements.join('|'))

/* _________№2__________ */
my_string = 'Вася;Петя;Вова;Олег'
console.log(my_string.split(';'));

/* _________№3__________ */

function sayHello(name) {
    if (name == undefined){
    console.log('Hello, ' + "guest");
    }
    else{
console.log('Hello, ' + name);}
};
sayHello('Alex'); 
sayHello(); 

/* _________№4__________ */

const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = String(fruits).toUpperCase().split(",");
console.log(fruitsInUpperCase)

/* _________№5__________ */


function addOneForAll(arr) {
    arr = arr.map(i=>i+1);
    return arr;
}
const val = addOneForAll([1, 2, 3, 4])
console.log(val)

/* _________№6__________ */

function getSum() {
    var result = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }

  const val = getSum(1, 2, 3, 4);
  console.log(val)

/* _________№7__________ */
const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
numberArray = []
function arrFilter(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            numberArray.push(arr[i]); 
        };
    }
{return numberArray}
};

arrFilter(arr);

/* _________№7 вариант2__________ */
var arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
var numberArray = arr.filter(function(number){
    return Number.isInteger(number);
  });

console.log(numberArray)



/* _________№8__________ */

const dontHaveTrueValue = [0, false, null, 0]; 
const haveTrueValue = [0, false, null, 1]; 

function arrayTesting(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) === true) {
            return "Нашли true значение";
        }
    }
    return "Ничего нет";
}

arrayTesting(dontHaveTrueValue);
arrayTesting(haveTrueValue);



