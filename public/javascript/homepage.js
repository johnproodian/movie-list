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

const getMovies = () => {
    let response = fetch('/api/movies', {method: 'get'})
    .then(console.log(response));
    

    // if (response.ok) {
    //     console.log('success');
    //     response.json().then( movieData => {
    //         displayMovies(movieData, movie);
    //     });
    // } else {
    //     alert(response.statusText);
    // }
}

// const displayMovies = (movies, searchTerm) {

// }

getMovies();