// integer / float type 구분
// "string"

// always const, sometimes let, never var
// const로 지정된 변수는 뒤에 가서 바꿀 수 없음.
// let은 뒤에서 변수를 재정의해주면 바꿀 수 있음.
// -> const는 바뀌면 안 되는 것, let은 바뀌어도 괜찮은 것에 사용. 

const a = 1000;
const b=234;

let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log("hello " + myName);

myName = "Nicolas";

console.log("your new name is "+ myName);




// true or false : 사용자가 로그인했는가? 등 참거짓으로만 판단
// null : 변수에 값이 "없다"는 것을 알려주기 위해 (의도적으로) 사용
// undefined : 변수는 있는데 그 변수에 값이 지정되어 있지 않음.
// true, false, null, undefined 모두 string이 아닌 다른 type임.

const amIFat = null;
let something;
console.log(something);
console.log(amIFat);




// 데이터 정리하기

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// array
// [element, element, element] (공통된 것들을 범주로 묶을때 씀)
// element에는 숫자, 변수, string, true, false, null ... 아무거나 넣어도 됨.

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

console.log(daysOfWeek, nonsense);

// array 안에서 원하는 데이터에 접근하기
// 변수 이름[n] * 원하는 변수가 앞에서 (n+1)번째에 있음
// 컴퓨터는 0부터 숫자를 셈

console.log(daysOfWeek[4])

// array에 데이터 추가하기
// 변수 이름.push(추가하고 싶은 것)

// array 데이터 바꾸기
// 변수 이름[몇번째] = "바꾸고싶은내용"

daysOfWeek.push("sunday");
console.log(daysOfWeek);




// object(array와 차이 : property를 가지는 것들을 저장해주고 싶을때 씀)

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";
// 변수를 따로 지정해줘야 해서 불편함

const playe = ["nico", 1212, false, "little bit"];
// elements에서 아무런 의미도 얻을 수 없음

// object : property를 가지는 데이터를 저장하게 해줌
// {property1:datatype, property2:datatype, ...};
const player = {
    name: "nico", 
    points: 10,
    fat:true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
// object 안 property를 불러올 땐 
// console.log 하는 것처럼 object.property 라고 써주면됨
// 또는 object.["property"]

// object는 업데이트 가능
console.log(player.fat);
player.fat = false;
console.log(player.fat);
// constant 전체(=object)를 바꾸는건 안되지만
// constant 내의 어떤 걸 바꾸는건 괜찮음

console.log(player);
player.lastName = "potato";
console.log(player);
// object 안에 property 추가하기

console.log(player.points);
player.points = player.points + 15;
console.log(player.points);
// 기존 값에 더해서 재설정할수도 있음!




// functions pt.1

// 어떠한 이름이든 hello를 해주는 function 작성하기
function sayhello() {
    console.log("Hello!");
}
// function 함수이름() { 이 안에 작성하는 게 함수 실행할때마다 나옴; }

sayhello();
sayhello();

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 18);
sayHello("dal", 23);
sayHello("lynn", 15);

function plus(a,b){
    console.log(a+b);
}

plus(15,7);

function divide(a,b){
    console.log(a/b);
}
plus(98,20);
divide(98,20);

const playerr = {
    name: "nico", 
    sayHelloo: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you.");
    },
};

console.log(playerr.name);
playerr.sayHelloo("lynn");
playerr.sayHelloo("nico");
// playerr라는 object 안에 sayHelloo라는 function이 들어갔고,
// playerr.sayHelloo(); 를 실행하면
// sayHelloo 라는 함수가 console.log("hello!") 로 구성? 되어 있기 때문에
// hello! 가 출력된다.


const calculator = {
    add: function(a,b){
        return a+b;
    },
    substract: function(a,b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
};

calculator.add(5,1);
calculator.substract(5,1);
calculator.multiple(5,3);
calculator.divide(16,4);
calculator.power(2,5);

const plusRe = calculator.add(2,3);
const minusRe = calculator.substract(plusRe,3);
const multipleRe = calculator.multiple(2,minusRe);
const divideRe = calculator.divide(multipleRe, plusRe);
const poweRe = calculator.power(divideRe, minusRe);

// return을 해야 값을 꺼내서 이용할 수 있음.
// console.log만 하면 그냥 console에서 볼 수만 있고 이용 x
// return 하면 function의 작동이 끝남(결과값을 return하고 멈춤!)
// function 안에서 return 뒤에 적힌건 실행 ㄴㄴ


const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);





