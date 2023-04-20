// document.write('detail page');
// https://yts.mx/api/v2/movie_details.json?movie_id=8612

// 1. 주소를 읽어서 변수에 저장 ("자바스크립트 주소 가져오기" 검색)
// 2. 저장된 주소를 = 을 기준으로 나눔 ("자바 스크립트 특정 문자열 자르기" 검색)
// 3. 2번에서 나눈 데이터 중 숫자만 저장
// 4. 위 주소의 끝 값을 3번에 저장한 숫자로 대입하여 API 호출
// 5. 호출된 json 데이터로 상세페이지 UI 만들기

const url = window.location.href;
const movieId = url.split('=')[1];
const detailElmt = document.querySelector('.details');

const getMovieDetails = () => {
  fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
    .then((response) => response.json())
    .then((details) => {      
      const data = details.data.movie;
      let detailData;
      detailData = `
      <img src="${data.large_cover_image}" alt="">
      <div class="txt">
        <p>${data.title}</p>
        <em>Synopsis : ${data.description_full}</em>
      </div>
      `;
      detailElmt.innerHTML = detailData;
    })
    .catch((err) => console.log(err));
}

getMovieDetails()

// loading effect javascript
// loader codepen

