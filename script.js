const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 10);
let personalMoviaDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");
personalMoviaDB.movies[a] = b;
personalMoviaDB.movies[c] = d;
console.log(personalMoviaDB);
