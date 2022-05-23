// conditionals 조건문
const age = parseInt(prompt("How old are you?"));
console.log(age);

//prompt -> 거의안씀. 오래된방법
// parseInt : string -> number
// 숫자를 입력하면 숫자가, 문자를 입력하면 NaN이 출력됨


console.log(isNaN(age));
 
if(isNaN(age) || age<0){
    console.log("Please write a real positive number");
} else if(age<18){
    console.log("You are too young.");
} else if(age>=18 && age<=50){
    console.log("you can drink.");
} else if(age>50 && age<=80){
    console.log("you should exercise");
} else if(age === 100){
    console.log("wow you are wise");
} else if(age>80){
    console.log("You can do whatever you want");
}
// And 연산자 : A && B 에서 둘 다 true여야 true
// Or 연산자 : C || D 에서 둘 중 하나라도 true이면 true
// === 
// !==


if ((a && b) || (c && d)){}