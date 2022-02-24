async function searchToWW(event) {
    event.preventDefault();

    const movieName = document.querySelector('input[name="movie-title"]').value.trim();

    const response = await fetch(`/api/movies/willWatch`, {
        method: 'PUT',
        body: JSON.stringify({
            movieName
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
    
}

document.querySelector('#movie-search-form').addEventListener('submit', searchToWW);
















// const inputEl = document.querySelector(".input");

// const searchSubmitHandler = (event) => {
//     event.preventDefault();
//     let searchItem = inputEl.value.trim();

//     if (searchItem) {
//         getMovies(searchItem);
//         searchItem.value = "";
//     } else {
//         alert("Please search for a movie");
//     }
// } 

// const getMovies = () => {
//     let response = fetch('/api/movies', {method: 'get'})
//     .then(console.log(response));

//     // if (response.ok) {
//     //     console.log('success');
//     //     response.json().then( movieData => {
//     //         displayMovies(movieData, movie);
//     //     });
//     // } else {
//     //     alert(response.statusText);
//     // }
// }

// // const displayMovies = (movies, searchTerm) {

// // }

// getMovies();