console.log("----- 숫자 관련 함수 -----");

// toString() : 숫자 데이터를 문자열 데이터로 변환
//  사용법 : 변수 = 숫자데이터.toString();
let num1 = 123;
console.log("원본 데이터 : ");
console.log(num1);
console.log(typeof num1);
console.log("toString() 변환 : " + num1.toString());
console.log(typeof num1.toString());
console.log(`toString() 변환 : ${(100 + 200).toString()}`);


console.log();


// toExponential() : 숫자 데이터를 지수표기법으로 변환. 반올림
//  사용법 : 숫자데이터.toExponential(표시할 자리수);
let num2 = 9.654;
console.log("원본 데이터 : " + num2);
console.log(`toExponential() 사용 후 : ${num2.toExponential()}`);
console.log(`toExponential(2) 사용 후 : ${num2.toExponential(2)}`);
console.log(`toExponential(4) 사용 후 : ${num2.toExponential(4)}`);

console.log();


// toFixed() : 소수점 자리를 지정한 크기만큼 표현. 반올림 효과
//  사용법 : 숫자데이터.toFixed(소수점자리);
console.log(`원본 데이터 : ${num2}`);
console.log(`toFixed(0) 사용 : ${num2.toFixed(0)}`);
console.log(`toFixed(0) 사용 : ${num2.toFixed(2)}`);
console.log(`toFixed(0) 사용 : ${num2.toFixed(4)}`);

console.log();


// NaN : Not a Number 의 줄임말. 숫자가 아니라는 의미
//isNaN : 지정한 데이터가 숫자인지 아닌지 확인. 숫자가 아니면 true
//  사용법 : 변수 = isNaN(데이터);
const num3 =  "1234";
const num4 = "12삼사";
console.log(`원본 데이터 num3 : ${num3}\tnum4 : ${num4}`);
console.log(`isNaN(num3) : ${isNaN(num3)}`);
console.log(`isNaN(num3) : ${isNaN(num4)}`);

console.log();


// Number(); : 문자열 데이터 타입 숫자를 숫자형 데이터 타입으로 변환
//             불가능할 경우 NaN이라는 데이터 타입을 반환
//  사용법 : 변수 = Number(데이터);
// ture =1, false = 0으로 변환
console.log(`Number(true) : ${Number(true)}`);
console.log(`Number(false) : ${Number(false)}`);
console.log(`Number("10") : ${Number("10")}`);
// 공백이 있으면 공백 삭제
console.log(`Number("   10") : ${Number("   10")}`);
console.log(`Number("10     ") : ${Number("10    ")}`);
console.log(`Number("    10    ") : ${Number("    10    ")}`);
console.log(`Number("10.33") : ${Number("10.33")}`);
// 문자열이 섞이면 NaN
console.log(`Number("10,33") : ${Number("10,33")}`);
// 중간에 공백기호가 있으면 NaN
console.log(`Number("10 33") : ${Number("10 33")}`);
// 문자는 NaN
console.log(`Number("javascript) : ${Number("javascript")}`);


console.log();


// parseInt() : 문자열 데이터 타입의 숫자를 정수 데이터로 변환
//  사용법 : 변수 = pareInt(데이터);
console.log(`parseInt("-10") : ${parseInt("-10")}`);
// 소수점 버림
console.log(`parseInt("-10.33") : ${parseInt("-10.33")}`);
console.log(`parseInt("10") : ${parseInt("10")}`);
console.log(`parseInt("10.33") : ${parseInt("10.33")}`);
// 중간에 공백이 있을 경우 공백 앞에있는 숫자만 반환. 문자가 올 경우 NaN
console.log(`parseInt("10 20 30") : ${parseInt("10 20 30")}`);
console.log(`parseInt("10 year") : ${parseInt("10 year")}`);
console.log(`parseInt("year 10") : ${parseInt("year 10")}`);

console.log();


// parseFloat() : 문자열 데이터 타입의 숫자를 실수 데이터로 변환
//  사용법 : 변수 = parseFloat(데이터);
console.log(`parseFloat("10") : ${parseFloat("10")}`);
console.log(`parseFloat("10.33") : ${parseFloat("10.33")}`);
// 중간에 공백이 있을 경우 공백 앞에있는 숫자만 반환. 문자가 올 경우 NaN
console.log(`parseFloat("10 20 30") : ${parseFloat("10 20 30")}`);
console.log(`parseFloat("10 year") : ${parseFloat("10 year")}`);
console.log(`parseFloat("year 10") : ${parseFloat("year 10")}`);

console.log();


// MAX_VALUE : 최댓값 출력
//  사용법 : Number.MAX_VALUE;
console.log(`숫자 데이터의 가장 큰 수 : ${Number.MAX_VALUE}`);

// MIN_VALUE : 최솟값 출력
//  사용법 : Number.MIN_VALUE;
console.log(`숫자 데이터의 가장 작은 수 : ${Number.MIN_VALUE}`);


