// 1. 변수 선언 : var 변수명(var a = 11, var b = "Hello")
// 2. 콘솔에 로그 출력 : console.log("")
// 3. 반복문 for(var i = 0; i < 10; i++)
// 4. 조건문 : if(boolean){ } else if(){}else{}
// 5. 문자열 기본 연산 : "문자열" + "문자열" = "문자열문자열"
// 6. 함수

var a = 10;
var b = "Hello";

console.log(a);
console.log(b);

// 반복문
// 1 부터 10까지
for(var i = 0; i < 10; i++){
  console.log(i);
}

// 조건문
if(a > 10){
  console.log("a가 10보다 큽니다.")
} else if ( a < 10){
  console.log("a가 10보다 작습니다.")
} else {
  console.log("a가 10과 같습니다.")
}
// 단, if(a == "10")일 경우 a는 10과 같다고 출력한다. int와 string을 같다고 판단.
// 그래서, 이 경우 a === 10 을 사용해 value와 type을 모두 체크하도록 한다.


// 6. 함수
//    파라미터에 타입이 없다.
//    리턴 타입을 지정하지 않는다. - 문장 내에서 리턴 여부에 따라 결정된다.

var x = 10
var y = 5;

var result = sum(x,y);

function sum(param1, param2){
    return param1+param2;
}

// 함수를 만드는 다른 방법 위 sum 함수와 동일하다.
var sum = function(param1, param2){
  return param1 + param2;
}

console.log(result);

// 7. class 사용하기
//    함수 생성과 동일

// function 클래스명(param1, param2){
// }

// 함수와 클래스 구분을 위해, 클래스는 첫 글자 대문자로 해준다.

function Num(param1, param2){
  var a = 0;    // private으로 선언된 변수(외부 접근 불가)
  this.b = 10;  // 나중에 Num.b로 접근(public, 외부 접근 가능)

  this.c = function(param5, param6){

  };  // 외부에서 접근 가능한 함수는 이 형태로만 선언 가능
}

// 클래스의 사용
var num = new Num("Hello", 157);
num.b = 500;
num.c("a", 49951);
