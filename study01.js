
console.log("----- 연산자 -----");

a= 10;
b = 3;
console.log("뭔본 변수 a : " + a + ",\tb  : " + b);

// 산술 연산자
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
// ES6에서 추가
console.log("a ** b = " +  (a ** b));

// 증감 연산자
a++;
console.log("a++ = " + a);
++a;
console.log("++a = " + a);
a--;
console.log("a-- = " + a);
--a;
console.log("--a = " + a);

// 대입 연산자
console.log("a = 100 : " + (a = 100));
console.log("a += 10 : " + (a += 10));
console.log("a -= 10 : " + (a -= 10));
console.log("a *= 2 : " + (a *= 2));
console.log("a /= 2 : " + (a /= 2));
console.log("a %= 3 : " + (a %= 3));
console.log("b **= 2 : " + (b **= 2));

// 문자열 연결 연산자
c = "문자열 " + "연결 " + "연산자";
console.log("문자열 + 연결 + 연산자 : " + c);

// 비교 연산자
console.log("10 == 5 : " + (10 == 5));
console.log("10 > 5 : " + (10 > 5));
console.log("10 >= 5 : " + (10 >= 5));
console.log("10 < 5 : " + (10 < 5));
console.log("10 <= 5 : " + (10 <= 5));
console.log("10 != 5 : " + (10 != 5));
// ==, != : js에서는 데이터 타입 상관없이 값만 비교연산
console.log("'5' == 5 : " + ('5' == 5));
console.log("'5' != 5 : " + ('5' != 5));
// 자바스크립트에서는 간소화된 문법을 사용하기 때문에 문자열 타입의 숫자와 숫자 타입의 숫자를 비교 연산이 가능함
// ===, !== : ES6에서 추가. 데이터 타입과 값 모두 비교연산
console.log("'5' === 5 : " + ('5' === 5));
console.log("'5' !== 5 : " + ('5' !== 5));


// 논리 연산자
console.log("10 > 5 && '5' === 5 : " + (10 > 5 && '5' === 5));
console.log("10 > 5 || '5' === 5 : " + (10 > 5 || '5' === 5));
console.log("!('5' != 5) : " + (!('5' != 5)));

// typeof 변수 : 변수의 데이터타입 확인
console.log("typeof a : " + (typeof a));
a = "자바스크립트"
console.log("typeof a : " + (typeof a));
// 변수 instanceof 클래스 : 변수가 지정한 클래스의 객체인지 확인
time = new Date();
console.log("instanceof : " + (time instanceof Date));

// 연산자의 우선순위
// 1. () : 괄호
// 2. . : 멤버, [] : 배열의 멤버, ?. : 선택적 체이닝, () : 함수호출
// 3. new
// 4. ++, --, !, ~, typeof, void, delete
// 5. **, *, /, %
// 6. +, -
// 7. <<, >>, >>> : 비트 연산
// 8. in, instanceof, <, <=, >, >=, ==, ===, !=, !==
// 9. &, ^, |
// 10. &&, ||, ? :
// 11. =, +=, -=, *=, /=, %=, **=

