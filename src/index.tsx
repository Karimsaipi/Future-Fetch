import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../components/App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

// /* ПОСЧИТАТЬ СУММУ ДВУХ ЧИСЕЛ (ФУНКЦИЯ ПРИНИМАЕТ 2 ЧИСЛА, ВОЗВРАЩАЕТ ИХ СУММУ) */
// /* ФУНКЦИЯ ПРИНИМАЕТ ЧИСЛО И ОПРЕДЕЛЕЯЕТ ЯВЛЯЕТСЯ ЛИ ОНО ЦЕЛЫМ */
// /* ФУНКЦИЯ ПРИНИМАЕТ ЧИСЛО И ПРИНИМАЕТ ЧЕТНОЕ ЛИ ОНО  */
// /* ФУКНЦИЯ ПРИНИМАЕТ ИМЯ И ВОЗВРАЩАЕТ СТРОКУ С ПРИВЕТСТСВИЕМ */
// /* ФУНКЦИЯ ПРИНИМАЕТ ЧИСЛА И ВЫВОДИТ И ВЫВОДИТ В КОНСОЛЬ ВСЕ ЧИСЛА ОТ 0 ДО ЭТОГО ЧИСЛА НЕ ВКЛЮЧИТЕЛЬНО */
// /* (СЛЕДУЮЩЕЕ ВКЛЮЧИТЕЛЬНО) */
// /* ПРИНИМАЕТ ЧИСЛО И ВОЗВРАЩАЕТ ФАКТОРИАЛ */

// /*  */
//   function calcSum(x, y) {
//     return x+y;
//   }
  
//   console.log (calcSum(5, 3));
  

//   /*  */
//   let fullNotFull = (x) => {
//     if (x % 1 === 0) {
//       return ('заебись');
//     } else {
//       return ('не заебись');
//     }
//   }
 
//   console.log(fullNotFull(5.2));

//   /*  */
//   let even = (x) => {
//     if (x % 2 === 0) {
//       return ('заебись');
//     } else {
//       return ('не заебись');
//     }
//   }
 
//   console.log(even(8));

//   /*  */
//   function helloName(text) {
//     return(text + ' ПРИВЕТ');
//   }
//   console.log (helloName('САНЯ'));

//   /*  */
//   function numberBeforeWith(n) {
//     arr = [];
//     for (i = 1; i <= n; i++) {
//     arr.push(i);
//     }
//     return arr;
//     }
//     console.log(numberBeforeWith(20));

//     /*  */
//   function numberBeforeWithout(n) {
//     arr = [];
//     for (i = 1; i < n; i++) {
//     arr.push(i);
//     }
//     return arr;
//     }
//     console.log(numberBeforeWithout(20));
  

//   function calcSum(x, y) {
//     if (typeof x !== 'number') {
//         throw new Error(`Argument 'x' of calcSum is invalid. Type of argument 'x' must be a number.`);
//     }
//     if (typeof y !== 'number') {
//         throw new Error(`Argument 'y' of calcSum is invalid. Type of argument 'y' must be a number.`);
//     }
//     return x + y;
// }

// // console.log(calcSum(3, '5'));

// function checkIfNumberIsInteger(x) {
//     if (typeof x !== 'number') {
//         throw new Error("Argument 'x' of checkIfNumberIsInteger is invalid. Type of argument 'x' must be a number");
//     }
//     return x % 1 === 0;
// }

// // console.log(checkIfNumberIsInteger(69.2));
// // console.log(checkIfNumberIsInteger(69));
// // console.log(checkIfNumberIsInteger('69'));

// function isEven(x) {
//     if (typeof x !== 'number') {
//         throw new Error("Argument 'x' of isEven is invalid. Type of argument 'x' must be a number");
//     }
//     return checkIfNumberIsInteger(x / 2);
// }


// // console.log(isEven(7));
// // console.log(isEven(8));
// // console.log(isEven('хуй'));

// function showFromZeroToNumber(x) {
//     if (typeof x !== 'number') {
//         throw new Error("Argument 'x' of isEven is invalid. Type of argument 'x' must be a number");
//     }
//     if (x < 0) {
//         throw new Error("Argument 'x' of isEven is invalid. x must be a positive number");
//     }
//     for (let i = 0; i < x; i++) {
//         console.log(i);
//     }
// }

// // showFromZeroToNumber(5);
// // showFromZeroToNumber(-1);
// // showFromZeroToNumber('хуй');

// function calcFactorial(x) {
//     if (typeof x !== 'number') {
//         throw new Error("Argument 'x' of calcFactorial is invalid. Type of argument 'x' must be a number");
//     }
//     if (x < 0) {
//         throw new Error("Argument 'x' of calcFactorial is invalid. x must be a positive number");
//     }
//     let result = 1;
//     for (let i = 2; i <= x; i++) {
//         result = result * i;
//     }
//     return result;
// }

// // console.log(calcFactorial(5));


// // Задача 1. Написать функцию, которая принимает string и возвращает true, если оно палиндром.
// // Задача 2. Написать функцию, которая принимает коэффициенты a, b, c и возвращает корни квадратного уравнения.
// // ax2+bx+c=0


// function definePallindrom(word) {
//   if (typeof word !== 'string') {
//     throw new Error("Argument 'word' of definePallindrom is invalid. Type of argument 'word' must be a string");
//   }
//   word = word.toLowerCase();
//     let result = true;
//     for (let i = 0; i < (word.length/2); i++) {
//       if ((word[i]) !== (word[(word.length - 1) - i])) {
//       result = false ;
//       break;
//     } 
//   }
//     return result;
// } 

// // console.log(definePallindrom('потоп'));
// // console.log(definePallindrom('паттаП'));
// // console.log(definePallindrom('САНЯ'));
// // console.log(definePallindrom(88));

// function findRoots(a, b, c) {
//   if (typeof  a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//     throw new Error("Argument 'a or b or c' of findRoots is invalid. Type of argument 'a or b or c' must be a number");
//   }
//   const discr = (b * b) - (4 * a * c);
//   // switch (discr) {
//   //   case discr < 0:
//   //     return ('корней нет');
//   //     break; После RETURN дальше функция не идет.
//   //   case discr = 0:
//   //     return (- b / 2 * a);
//   //     break;
//   //   case discr > 0:
//   //     return  ((- b + (discr / discr)) / 2 * a);
//   //     break;
//   //   default:
//   //     return ('хуй');
//   // }  
//   if(discr < 0) {
//     return 'корней нет';
//   } 
//   if(discr === 0) {
//     return (-b / 2 * a);
//   }
//   if(discr > 0) {
//     const x1 = ((-b + Math.sqrt(discr)) / 2 * a);
//     const x2 = ((-b - Math.sqrt(discr)) / 2 * a);
//     const roots = x1 + ';' + x2 + '.';  // `${x1};${x2}.`
//     return roots;
//   }
// }
//  console.log(findRoots(10 , 150, 12));

//  function insertTweet(tweet, containerSelector) {
//   const tweetContainer = document.querySelector(containerSelector);
  
//   // Если нужный контейнер не найден, создадим его
//   if (!tweetContainer) {
//       const newTweetContainer = document.createElement('div');
//       newTweetContainer.textContent = tweet;
//       document.body.append(newTweetContainer);

//   return;
//   }

//   tweetContainer.textContent = tweet;
// }

// function log(value) {
//   console.log(value)
// }

// log('1')

// setTimeout(() => {
//   log('setTimeout 1')
//   Promise.resolve().then(() => {
//     log('promise setTimeout')
//   })
// }, 0)

// setTimeout(() => {
//   log('setTimeout 2')
// }, 0)

// Promise.resolve().then(() => {
//   log('promise 1')
// })

// Promise.resolve().then(() => {
//   log('promise 2')
// })

// log('4')



// //////



// const newPromise = new Promise(function (resolve, reject) {
//   resolve('Раз'); // Сразу получим обработанный промис
// });

// function firstAction(value) {
// /* Значением value станет то, что мы передали
// функции resolve при создании промиса.
// То есть строка "Раз". */

//   return `${value}, два`;
// }

// function secondAction(value) {
// /* Тут значение value — это то, что вернёт
// предыдущий метод then, то есть строка "Раз, два" */

//   return `${value}, три`;
// }

// function thirdAction(value) {
//   console.log(value);
// }

// newPromise.then(firstAction).then(secondAction).then(thirdAction);

// /* В консоли окажется: "Раз, два, три" */

// /* Написать функцию calcDistance
// На вход в ф-цию пользователь передает:
// 1)Угол наклона пушки/начальный угол полета ядра.
// 2)Начальная скорость ядра.
// Функция должна вернуть дистанцию, которую преодолело ядро */

// function calcDistance(speed, angle) {
//   if (typeof  angle !== 'number' || typeof speed !== 'number') {
//     throw new Error("Argument 'angle or speed' of calcDistance is invalid. Type of argument 'angle or speed' must be a number");
//   }
//   if (angle < 0 || angle > 90) {
//     throw new Error("Argument 'angle' of calcDistanse is invalid. If the angle is less than 0, then the core will not fly away. If it is more than 90, it will fly back");
//   }
//   const radian = (angle * 3.14) / 180;
//   const l= (Math.pow(speed, 2) * Math.sin(2 * radian)) / 9.81;
//   return l;
// }
// console.log(calcDistance(30, 80));

// /* Написать функцию getPrimeNumbers.
// На вход принимает натурально число и возвращает все простые числа до него */

// function getPrimeNumbers(n) {
//   let array = [];
//   if (n < 0 || n > 1000) {
//     throw new Error("Argument 'a' of getPrime is invalid. Prime number must be positive");
//   }
//   for (i = 1; i <= n; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0 && j < i) {
//         break;
//       } else if (j === i) {
//         array.push(i);
//       }
//     }
//   }
//   return array;
// }
// console.log(getPrimeNumbers(55));

// let user = {

// };
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let schedule = {
//   name : 'salim',
// };


// function isEmpty(obj) {
//   for (let key in obj){
//     return true;
//   } 
//     return false;
// }

// console.log(isEmpty(schedule));

// let LOX = {
//   name: "John",
//   age: 30
// };

// const bye = Object.assign({bye}, LOX);

// сonsole.log(bye);

// const car = {
//   length: 4400,
//   width: 1700,
//   height: 1600,
//   weight: 1450,
//   brand: 'sanya',
//   model: 'supercar',
//   currentSpeed: 0,
//   fuelTank: {
//     maxCapacity: 60,
//     currentCapacity: 60,
//   },
//   type: '4-door sedan',
//   gaspedal: {
//     maxEffort: 6,
//     currentEffort: 0,
//   },
//   transmission: {
//     type:'auto',
//     numberOfGears: 8,
//   },
//   engine: {
//     type: 'turbo',
//     numberOfCilinders: 6,
//     hp: 280,
//     maxNm: 400,
//     currentEngineSpeed: 0,
//     calcCurrentEngineSpeed: function(currentEffort){
//       if(this.launched === false || (currentEffort < 0 && currentEffort > 6)) {
//       return ('current Consumption = 0, because engine is turned off. Force can vary from 1 to 5')
//       } else{
//       return this.currentEngineSpeed = currentEffort * 1000;
//       }
//     },
//     launched: false,
//     consumption: 3,
//     currentConsumption: 0,
//     calcCurrentConsumption: function (effort) {
//       if(this.launched === false || (effort < 0 && effortffort > 6)) {
//       return ('current Consumption = 0, because engine is turned off. Force can vary from 1 to 5')
//       } else {
//       return this.currentConsumption = effort * this.consumption;
//       }
//     },
//   },
//   start: function() {
//     this.engine.launched = true;
//   },
//   ride: function(effort, currentGear) {
//     if(this.launched === false || (currentGear < 0 && currentGear > 9)) {
//     return ('current Consumption = 0, because engine is turned off. Current Gear can vary from 1 to 8')
//     } else {
//     this.gaspedal.currentEffort = effort;
//     this.engine.calcCurrentConsumption(effort);
//     this.currentSpeed = this.c
//     this.fuelTank.currentCapacity = this.fuelTank.currentCapacity - this.engine.currentConsumption;
//     }
//   },  
// }

// car.start();
// console.log(car.engine.launched);

// car.engine.calcCurrentConsumption(5);
// console.log(car.engine.currentConsumption);

// car.engine.calcCurrentEngineSpeed(5);
// console.log(car.engine.currentEngineSpeed);

// console.log(car.ride(5, 1));








// const microwave = {
//   sizes: {
//     width: 40,
//     height: 30,
//     length: 25,
//     internalVolume: 20,
//   },
//   material: {
//     name: 'steel',
//     density: 120,
//     texture: 'smooth',
//     color: 'grey',
//   },
//   microwaveDoor: {
//     material: {
//       name: 'glass',
//       texture: 'smooth',
//       color: 'transparent',
//     },
//     openCloseMechanism: 'button-opening',
//   },
//   maxPower: 700,
//   currentPower: 0,
//   maxHeatingTemperature: 70,
//   currentTemperature: 0,
//   mode: {
//     list: [{
//       name: 'standart',
//       power: 700,
//       temperature: 0,      
//     },
//     { name: 'warming up',
//       power: 350,
//       temperature: 25,
//     },
//     { name: 'max-power',
//       power: 700,
//       temperature: 50,
//     },
//     ],
//     tumbler: {
//       currentPosition: 0,
//       material: {
//         name: 'plastic',
//         color: 'black',
//         texture: 'smooth',
//       },
//       toggle: function(position){
//         this.currentPosition = position;
//       },
//     },
//   },
//   tumblerTemperature: {
//     currentPositionTemp: 0,
//     material: {
//       name: 'plastic',
//       color: 'black',
//       texture: 'smooth',
//     },
//     toggleTemp: function(position){
//       this.currentPositionTemp = position;
//     },
//   },
//   tumblerTime: {
//     currentPositionTime: 0,
//     material: {
//       name: 'plastic',
//       color: 'black',
//       texture: 'smooth',
//     },
//     toggleTime: function(position){
//       this.currentPositionTime = position;
//     },
//   },
//   startButton: {
//     name: 'on',
//     onClick: function() {
//       microwave.getStarted();
//     }
//   },
//   bulb: {
//     power: 5,
//     turnedOn: false,
//   },
//   plate: {
//     material: 'glass',
//     rotationMotor: {
//       power: 5,
//       isEngineStart: false,
//     },
//   },
//   display: {
//     diameter: 0.3,
//     material: 'glass',
//     backLightColor: 'green',
//     content: 0,
    
//   },
//   getStarted: function(){
//     if(this.mode.tumbler.currentPosition === 0) {
//     this.currentPower = 700;
//     this.tumblerTemperature.toggleTemp(300);
//     this.currentTemperature = this.tumblerTemperature.currentPositionTemp;
//     } else {
//     this.currentPower = this.mode.list[this.mode.tumbler.currentPosition].power;
//     this.currentTemperature = this.mode.list[this.mode.tumbler.currentPosition].temperature;
//     this.plate.rotationMotor.isEngineStart = true;
//     this.bulb.turnedOn = true;
//     }
//   },
//   }

// microwave.mode.tumbler.toggle(0);
// microwave.startButton.onClick();
// console.log(microwave.mode.tumbler.currentPosition);
// console.log(microwave.currentPower);
// console.log(microwave.currentTemperature);


// function CarJapan(brand, model, turbo, hp, acceleration) {
//   if(brand !== 'honda' && brand !== 'mazda' && brand !== 'toyota' && brand !== 'mitsubishi'){
//     return ('Error! Car brand must be from Japan and not luxury');
//   }
//   if(typeof turbo !== 'boolean'){
//     return ('Error! Argument turbo must be a boolean');
//   }
//   if(typeof model !== 'string') {
//     return ('Error! Argument model must be a string');
//   }
//   if(typeof hp !== 'number') {
//     return ('Error! Argument hp must be a number');
//   }
//   if(typeof acceleration !== 'number') {
//     return ('Error! Argument hp must be a number');
//   }
//   this.brand = brand;
//   this.model = model;
//   this.turbo = turbo;
//   this.hp = hp;
//   this.acceleration = acceleration;

//   this.installTurbine = function () {
//     if(turbo === true) {
//       return ('This model already has a turbine');
//     } else {
//       this.turbo = true;
//     }
//   }

//   this.installFirmware = function () {
//     if(this.turbo === true) {
//       this.hp = this.hp + (this.hp/100 * 5);
//       this.acceleration = this.acceleration - (this.acceleration / 100 * 3);
//     } else { 
//       this.hp = this.hp + (this.hp/100 * 2);
//       this.acceleration = this.acceleration - (this.acceleration / 100 * 1);
//     }
//   }
// }

// let a = new CarJapan('honda', 'lancer', true, 320, 6.5);
// a.installFirmware();
// console.log(a);

// function Microwave (width, height, material, maxPower) {
//   if(typeof width !== 'number'){
//     return ('Error! Argument width must be a number');
//   }
//   if(typeof height !== 'number'){
//     return ('Error! Argument height must be a number');
//   }
//   if(typeof material !== 'string'){
//     return ('Error! Argument material must be a string');
//   }
//   if(typeof maxPower !== 'number'){
//     return ('Error! Argument maxPower must be a number');
//   }
//   this.width = width;
//   this.height = height;
//   this.material = material;
//   this.maxPower = maxPower;

//   this.timer = 0;
//   this.isActive = false;

//   this.start = function(duration) {
//     this.timer = duration;
//     this.isActive = true;
//   }

//   this.stop = function() {
//     this.timer = 0;
//     this.isActive = false;
//   }

// }

// // let samsungWave = new Microwave(30, 20, 'steel', 650);
// samsungWave.start(50);
// console.log(samsungWave);

// function User (name, height, weight, myopia, beard) {
//   if(typeof name !== 'string'){
//     return ('Error! Argument name must be a string');
//   }
//   if(typeof height !== 'number'){
//     return ('Error! Argument height must be a number');
//   }
//   if(typeof weight !== 'number'){
//     return ('Error! Argument weight must be a number');
//   }
//   if(typeof myopia !== 'boolean'){
//     return ('Error! Argument myopia must be a boolean');
//   }
//   if(typeof beard !== 'boolean'){
//     return ('Error! Argument boolean must be a boolean');
//   }

//   this.name = name;
//   this.height = height;
//   this.weight = weight;
//   this.myopia = myopia;
//   this.beard = beard;

//   this.makeCorrection = function() {
//     if(this.myopia = false) {
//       return ('Vision is already excellent');
//     } 
//     this.myopia = false;
//   }

//   this.getShaved = function() {
//     if(this.beard = false) {
//       return ('he is already clean shaven');
//     }
//     this.beard = false;
//   }
// }

// const sanya = new User('sanya', 182, 84, true, true);
// console.log(sanya);
// sanya.makeCorrection();
// console.log(sanya);

// function Animal(type, name, legs, color, eyes) {
//   if(typeof type !== 'string'){
//     return ('Error! Argument type must be a string');
//   }
//   if(typeof name !== 'string'){
//     return ('Error! Argument name must be a string');
//   }
//   if(typeof legs !== 'number'){
//     return ('Error! Argument legs must be a number');
//   }
//   if(typeof color !== 'string'){
//     return ('Error! Argument color must be a string');
//   }
//   if(typeof eyes !== 'number'){
//     return ('Error! Argument myopia must be a boolean');
//   }
 
//   this.type = type;
//   this.legs = legs;
//   this.color = color;
//   this.eyes = eyes;
//   this.name = name;

//   this.children = [];
//   this.stomach = [];

//   this.doChild = function(name) {
//     this.children.push(new Animal(this.type, name, this.legs, this.color, this.eyes));
//   }

//   this.eat = function(food) {
//     this.stomach.push(food);
//   }
// }

// const tiger = new Animal('tiger', 'barsik', 4, 'orange', 2);
// tiger.doChild('alex');
// tiger.eat('meat', 'fish');
// console.log(tiger);

// let mc = 1e10;
// console.log(mc);


// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }

/**
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * Сложность задачи: 1 of 5
  * @param {number} arraySize - размер массива
  * @param {?} value - значение для массива
  * @returns {Array}
*/

// const fill = (arraySize, value) => {
//   throw new Error('Напишите здесь свое решение');
//  }
 
//  const data = 3;
//  const valueToFill = 'a';
//  console.log(fill(data, valueToFill)) // ['a', 'a', 'a']


/*Задача 1. Есть массив [{name: 'Karim', age: 23}, {name: 'Alex', age: 23}, {name: 'Robert', age: 35}, {name: 'Bart', age: 44}].
Необходимо получить массив возрастов.*/

const allUsers = [
  {name: 'Karim', age: 23}, 
  {name: 'Alex', age: 23}, 
  {name: 'Robert', age: 35}, 
  {name: 'Bart', age: 44}, 
  {name: 'Salim', age: 13}, 
  {name: 'Kamil', age: 27},
];

const usersAge = allUsers.map(item => item.age);
console.log(usersAge);


/*Задача 2. Есть массив [{name: 'Karim', age: 23}, {name: 'Alex', age: 23}, {name: 'Robert', age: 35}, {name: 'Bart', age: 44}].
Необходимо получить массив объектов у которых возраст больше 23.*/

const usersAgeOlder23 = allUsers.filter(item => item.age > 23);
console.log(usersAgeOlder23);

/*Задача 3. Необходимо получить массив строк вида 'Bart age is 44' только из пользователей у кого возраст больше 25.*/

const usersAgeOlderType = usersAgeOlder23.map(object => `${object.name} age is ${object.age}`);
console.log(usersAgeOlderType);


/*Задача 4. Есть массив чисел [526, 42, 67, 183, 16, 81]. Необходимо получить отсортированный по возрастанию массив, в котором есть только числа больше 50.*/

const numbers = [526, 42, 67, 183, 16, 81, 51, 21, 11];
const numbersAbove50 = numbers.filter(item => item > 50);

const compareFn = (a: any, b: any) => a - b;
const numbersAbove50Sort = numbersAbove50.sort(compareFn);

console.log(numbersAbove50Sort);

/*Задача 5. Есть массив [{id: 2, name: “Serg”, age: 55, salary: 42000}, {id: 1, name: “Peter”, age: 43, salary: 56000}, 
{id: 6, name: “Katya”, age: 25, salary: 24000}, …]. Необходимо получить массив зарплат, тех пользователей, кто старше 30*/

const workers = [
  {id: 2, name: "Serg", age: 55, salary: 42000}, 
  {id: 1, name: "Peter", age: 43, salary: 56000},
  {id: 6, name: "Katya", age: 25, salary: 24000},
  {id: 3, name: "Sulatan", age: 33, salary: 28600},
  {id: 9, name: "Petr", age: 41, salary: 32000},
]

const salaryToAgeOver30 = workers.filter(item => item.age > 30).map(item => item.salary);

console.log(salaryToAgeOver30);

/*Задача 6. Есть массив [{id: 2, name: “Serg”, age: 55, salary: 42000}, {id: 1, name: “Peter”, age: 43, salary: 56000}, 
{id: 6, name: “Katya”, age: 25, salary: 24000}, …]. Необходимо получить первого юзера, у которого зп больше 50000*/

const salaryOver50000 = workers.find(item => item.salary > 50000);

console.log(salaryOver50000);

/*Задача 7. Есть массив [{id: 2, name: “Serg”, age: 55, salary: 42000}, {id: 1, name: “Peter”, age: 43, salary: 56000}, 
{id: 6, name: “Katya”, age: 25, salary: 24000}, …]. Необходимо получить среднюю зарплату*/

const salaryAverage = workers.map(item => item.salary).reduce(function (acc, item, index, arr) {
  const sum = acc + item;
  if (index === workers.length - 1) {
    return sum / workers.length
  }
  return sum
});

console.log(salaryAverage);

/*Есть массив [{ id: 1, productName: “Milk”, price: 65, weight: 1000 }, [{ id: 13, productName: “Cheese”, price: 245, weight: 300 }, [{ id: 21, productName: “Bread”, price: 32, weight: 420 }, [{ id: 52, productName: “Chicken”, price: 375, weight: 1000 }, [{ id: 46, productName: “Meat”, price: 495, weight: 1000 }, [{ id: 1, productName: “Oranges”, price: 325, weight: 1000 }].
1) Необходимо получить массив из 3 продуктов с наибольшей выгодой по цене за грамм.
1.1) Необходимо получить суммарную цену этих продуктов
1.2) Необходимо получить суммарный вес этих продуктов
2) Необходимо удалить продукт с наименьшей выгодой по цене за грамм.
3) Необходимо получить массив из объектов вида {id: 1, grPrice: 0.1.}.*/

const products = [{ id: 1, productName: 'Milk', price: 65, weight: 1000 }, 
  { id: 13, productName: 'Cheese', price: 245, weight: 300 },
  { id: 21, productName: 'Bread', price: 32, weight: 420 }, 
  { id: 52, productName: 'Chicken', price: 375, weight: 1000 },
  { id: 46, productName: 'Meat', price: 495, weight: 1000 }, 
  { id: 1, productName: 'Oranges', price: 325, weight: 1000 }]
  
  // Необходимо получить массив из объектов вида {id: 1, grPrice: 0.1.}.
  
  const productsType = products.map(object =>({
    id: object.id, 
    grPrice: object.price/object.weight
  }));
  
  console.log(productsType);
  
  const obj = {
    name: 'Karim',
    surname: 'Saipi',
    age: 25,
    job: 'no-job',
  }
  
  
  console.log(obj);
  
  const arr = Object.entries(obj);
  console.log(arr);
  console.log(Object.fromEntries(arr));
  
  const map = new Map(arr);
  
  console.log(map);

  map.set('kv', 77);

console.log(map);

map.delete('job');

console.log(map);

const set = new Set([1,2,3,3,3,3,3,4,5,5,6]);
console.log(set);

set.add(10).add(20)

console.log(set);

document.getElementById('myForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const surname = (document.getElementById('surname') as HTMLInputElement).value;

  const data = {
    name: name,
    surname: surname,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) throw new Error('Ошибка сети');
    return response.json();
  })
  .then(result => {
    alert('Данные успешно отправлены!');
    console.log(result);
  })
  .catch(error => {
    alert('Произошла ошибка при отправке данных.');
    console.error(error);
  });
});