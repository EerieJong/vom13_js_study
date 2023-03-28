// 함수는 특정한 기능을 수행하도록 정의된 코드의 집합이다.
// 기능의 모듈화 : 특정 기능을 하나로 정의하여 재사용
// 함수는 정의 함수와 기정의 함수로 나뉜다.

// 1. 함수의 기본 형태(기명함수, 선언함수) + 즉시호출함수
// signiture : function(parameter){logics};
// - 함수는 먼저 특정 기능 알고리즘을 정의하고(정의부), 정의된 함수를 호출(호출부)하는 형태로 사용한다.
// - 함수의 형태 : https://velog.io/@inyong_pang/JavaScript-Function%ED%95%A8%EC%88%98-7wk400kzxh
// - 함수는 기본 형태, 함수 내부로 전달되는 파라미터, 내부에 정의된 값을 밖으로 내보내는 return으로 구성된다.

//정의부
function printNm(name){
  console.log(name);
}

//호출부
printNm('창호')

function sum(a, b){ // 형식 parameter
  return a + b;
}

console.log(sum(5, 9)); // 실제 parameter
document.write(sum(6, 2));

// n층짜리 별탑 찍기
function stackTop(a){
  for(let i = 0; i < a; i++){
    for(let j = 0; j < i; j++){
      document.write('*');
    }
    document.write('<br>');
  }
}

stackTop(20)

// 누적 합계
function sumNum(a){
  let sum = 0;
for(let i = 1; i <= a; i++){
  // console.log(i);
  sum += i;
}
return sum;
}

console.log(sumNum(100));




// - 함수의 이름 식별자는 동사 형태로 작성한다 : ex) eventListener, startSlide...
// - parameter(매개변수)는 호출 시 작성한 매개변수를 함수를 정의한 로직 내부에 전달하는 역할을 한다
// - return(반환)은 함수 내부에서 작성한 결과값을 함수블럭 외부로 반환한다.
// - 기본(선언형, 기명) 함수는 호이스팅된다.

// 2. 함수의 역할
// - 반복되는 코드를 한 번만 정의하고 필요 시 호출하여 반복을 피한다
// - 여러 기능을 분리하여 모듈화할 수 있다

// 3. 익명함수
// - 함수를 정의할때 함수의 이름(식별자) 없이 정의하는 형태를 말한다.
// - 이름이 정해지지 않았지만 함수 자체를 변수에 저장했기 때문에 변수 이름이 기명함수의 이름과 같이 사용된다.
// setNoName(); // 익명함수는 호이스팅 되지 않는다.
// - 익명함수 실행 방법 1 : 즉시 실행 함수

// - 익명함수 실행 방법 2 : 변수 대입

// - 익명함수는 자체를 사용하는 것보다는 콜백 함수로 실행시키는 경우가 많다.

// 4. 매개변수의 개수
// - 매개변수는 기본적으로 선언시 개수와 정의시 개수가 같은게 일반적이다.
// - 하지만 개수가 다르더라도 오류가 나지는 않지만 남는 매개변수는 undefined로 할당된다.

// - 반대로 선언된 매개변수가 더 많을 경우 마지막 매개변수는 무시된다

// 5. 가변 매개변수 함수
// - 호출 시 매개변수의 개수가 고정되어 있지 않을 경우 사용할 수 있는 방법이 나머지 매개변수(rest parameter)라 한다.
// - signiture : function fName(...rest parameter) {}
// - 나머지 매개변수는 배열 형태로 리턴된다.

// - 최솟값 찾기

// 6. 콜백 함수
// 함수는 변수에 저장할 수 있는 자료형이다. 따라서 함수 자체를 다른 함수의 매개변수로 전달할 수 있는데, 이를 콜백함수라 한다.
// 콜백 함수는 이벤트를 실행하는 addEventListener 또는 배열을 다루는 forEach, map, filter 등에 활용되는 중요한 방식이다(DOM, ArrayFunction)
// 또한 promise와 같은 비동기 메서드에서도 활용된다

// 7. 화살표 함수
// - 화살표 함수는 es6부터 제공되는 함수 작성 방식이다.
// - 일반 함수 작성 방식과 차이점은 this 키워드로 접근되는 대상이 다르다. 참조 : https://velog.io/@padoling/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%99%80-this-%EB%B0%94%EC%9D%B8%EB%94%A9
// - this와 관련된 내용은 초반에는 다소 어려운 내용이다. 따라서 DOM 관련 문서 객체 선택 부분에서 조금 다루고, 이후 함수와 관련한 내용이 익숙해진 후 살펴보면 된다.
// - 그 외 화살표 함수는 일반 함수 작성 방식보다 간편하고, 최근 트랜드에 맞춰가기 위해 사용하는 것이 일반적이다. 필수 사용은 아니다.
// - signiture : (parameters) => {}

// - 일반 함수와 마찬가지로 익명처리 될 때는 변수 식별자에 대입하여 표현한다.

// - 다른 함수의 콜백 함수로 사용할 때는 변수 식별자에 대입하지 않아도 된다.
// - 일반적으로 콜백 함수는 초기에 직접 만드는 경우보다 제공되는 메서드에서 사용되는 경우가 많다.(forEach, map, filter, promise, setTimeout, setInterval...)

// - 파라미터가 하나만 존재하는 경우 괄호 생략 가능하다.

// - 화살표 함수 내부에 return만 존재하면 {}를 제외할 수 있다.
