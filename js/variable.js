// alert("abc");

// const divEl = document.querySelector("div");
// console.log(divEl);

// 디버깅 창의 콘솔 탭에 표시되는 데이터
// 작성한 데이터가 브라우저에 어떻게 표시 되는지를 확인하는 용도로 쓰인다

// console.log("test");
// document.write('browser print')
// alert('alert test')

// 1. var 변수 선언과 호이스팅
// - 2015년 후에 const와 let으로 대체된 변수 선언 키워드
// - 호이스팅은 변수가 선언되는 순간 해당 데이터가 가장 위에서 선언된 것으로 간주하는 특징을 말한다

// var abc 
console.log(abc);
var abc =1; //변수 호이스팅 되어 위로 올라간다

// 2. 변수
// - 임의로 만든 식별자에 특정 데이터를 저장하는 것을 말한다
// - 변수가 선언되면 자바스크립트 엔진은 특정 "공간"을 만들고 데이터를 참조한다.

// 3. const 상수 선언
// 상수는 항상 같은 수로 한번 이름이 정해지면 바꿀 수 없다.
// 상수는 한 번만 저장되기 때문에 별도의 공간을 할당하지 않아 효율적이다.
// 따라서 대부분 값의 할당은 상수로 선언된다.

const ef = 10; //호이스팅 안된다. 재할당 불가능하다.
console.log(ef);

// 4. let 변수 선언
// - 변할 수 있는 값으로 런타임으로 값의 변경이 가능하다
// - let으로 선언된 변수는 값의 변경은 가능하지만 선언을 다시할 수 없다

let cd = 3; // 호이스팅이 안된다. 재할당 가능하다
console.log(cd);

cd = 5;
console.log(cd);

// - 변수 사용 규칙


// 1. 변수 이름은 숫자로 시작할 수 없고, 이름 안에 공백이 포함되어 있을 수 없다.
// 2. 영문자의 대소문자를 구변한다.
// 3. 한 단어로 이뤄진 변수를 사용할 때는 소문자를 사용하고, 두 단어 이상으로 이뤄진 변수는 '_'(스네이크 케이스)로 연결하거나, 두 번째 단어의 첫 글자를 대문자로(카멜 케이스) 작성한다.
// 4. let, function, for 등 미리 정해져 사용되는 예약어는 변수로 사용할 수 없다.
// 5. a, b, a-1 등 무의미한 변수이름 사용은 되도록 피한다.
// 6. average => avg, xmlHttpReqeust => xhr 등 변수 축약을 과거 데이터 용량이 부족할때 사용되었지만 현재는 자동완성 기능 등이 발달했기 때문에 못알아볼 정도의 축약이라면 차라리 용도 이름을 직관적으로 알아볼 수 있도록 풀네임을 쓰는 것이 좋다. ex) rspdt => responseData

