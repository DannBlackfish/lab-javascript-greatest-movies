// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (movies) => movies.map(movie=> movie.director)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    return movies.filter(movie => (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama')>-1)).length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arrMovies) => {
    const sum = arrMovies.map((e)=>{
        if(!e.rate){
            return {
                ...e,
                rate: 0
            }
        } else {
            return e
        }
    })
    console.log(sum)
    const ratesAvg = sum.reduce((a,b) => {
        const totalPeliculas=sum.length
        const totalRate = a+b.rate/totalPeliculas
        return totalRate
    },0)
    console.log("rates", ((ratesAvg)).toFixed(2))
    return Number ((ratesAvg).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(function(dramaMovie) {
        return (dramaMovie.genre.indexOf("Drama") > -1)
    })
    if (!drama.length) return 0
    let suma = (drama.reduce((acc, cv) => acc + cv.rate, 0) / drama.length).toFixed(2)
    return parseFloat(suma)
}

/*
Defines dramaMoviesRate
You should return a number!
Return the rate of a single element array!
It should return the average of the array!
It should return the average of the array, float!
Only Drama Movies! You should return the average of Drama movies only!
Should return 0 if there is no Drama movie!
*/
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const newArr = [...arr];
    const moviesByYear = newArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1
      }
    })
    return moviesByYear;
  };

/*
Defines orderByYear
Should return an array
Should return a new array
Should return the element in a single element array
Return the new array in ascending order
If two movies have the same year, order them alphabetically by their title
*/


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrmovies) {
    const movieNew = arrmovies.map(e => e.title)
    movieNew.sort()
    const prim20 = movieNew.slice(0, 20)
    return prim20
}

/*

const lista = [
  { nombre: 'juan', edad: 50 },
  { nombre: 'alberto', edad: 40 },
  { nombre: 'aragor', edad: 2000 },
]
console.log(lista.sort((a, b) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0)))
// 0: {nombre: "alberto", edad: 40}
// 1: {nombre: "juan", edad: 50}
// 2: {nombre: "aragor", edad: 2000}

Defines orderAlphabetically
You should return an array
You should not mutate the original array
Only return the title of the movies! Each element should be a string
If there are less than 20 elements, return all of them.
If there are more than 20 elements, return only 20 of them.
You should order them alphabetically.
You should return the top20 after ordering them alphabetically.

*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const modifiedArray = arr.map(movie => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: convertDurationtoMinutes(movie.duration),
            genre: movie.genre,
            rate: movie.rate
        }
    });
    return modifiedArray;
};
function convertDurationtoMinutes(string) {
    let hoursString = '';
    let minutesString = '';
    let indexOfSpace = string.indexOf(' ');
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf('h') === -1) {
            minutesString += string[i];
        } else if (i < indexOfSpace || indexOfSpace === -1) {
            hoursString += string[i];
        } else {
            minutesString += string[i];
        }
    }
    if (hoursString.length === 0) {
        return parseInt(minutesString, 10);
    }
    if (minutesString.length === 0) {
        return parseInt(hoursString, 10) * 60;
    }
    return parseInt(hoursString, 10) * 60 + parseInt(minutesString, 10);
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
