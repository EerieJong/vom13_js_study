const movies = document.querySelector('.movies');
const container = document.querySelector('.container');

const getMovies = () => {
fetch('https://yts.mx/api/v2/list_movies.json?limit=5&sort_by=year')
.then((response) => response.json())
.then((json) => {
  let movieData;
  json.data.movies.map((d, i) => {
    // console.log(d); 
    container.style.display = 'none';
    movieData =`
    <div class="movie">
      <div class="movie-img">
        <img src="${d.medium_cover_image}" alt="" onerror="this.src='dafault.png'">
      </div>
      <div class="movie-title">
        <a href="detail.html?movie_id=${d.id}">${d.title}</a>
      </div>
    </div>
    `;
    movies.innerHTML += movieData;
  });
})
.catch((error) => console.log(error));

}

getMovies();
