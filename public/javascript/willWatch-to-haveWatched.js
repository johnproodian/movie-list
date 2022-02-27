
// See Search-to-willWatch.js --> should be very similar
// Look at the PUT /haveWatched route in movie-routes

// function wwToHaveWatched(event) {
    
//     console.log('worked!');
//     document.location.reload();

// }

const wwToHaveWatched = function() {
    const movieName = event.target.textContent;

    fetch('/api/movies/haveWatched', {
        method: 'PUT',
        body: JSON.stringify({
            movieName
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    })
    .catch(err => {
        alert('Unable to move movie to "Have Watched"');
    })
}

const wwButtons = document.getElementsByClassName('ww-btn');

for (let i = 0; i < wwButtons.length; i++) {
    wwButtons[i].addEventListener('click', wwToHaveWatched);
}



// // document.querySelector()



// // for (let i = 0; i < )


// // event handler for clicking on button on the movie
// if (document.querySelector("#ww-1")) {
//     document.querySelector("#ww-1").addEventListener("click", () => {
//         const movieName = "Forrest Gump";

//         fetch('/api/movies/haveWatched', {
//             method: 'PUT',
//             body: JSON.stringify({
//                 movieName
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             if (response.ok) {
//                 document.location.replace('/');
//             } else {
//                 alert(response.statusText);
//             }
//         })
//         .catch(err => {
//             alert('Unable to move movie to "Have Watched"');
//         })
//     })
// }

// if (document.querySelector("#ww-2")) {
//     document.querySelector("#ww-2").addEventListener("click", () => {
//         const movieName = "Mean Girls";

//         fetch('/api/movies/haveWatched', {
//             method: 'PUT',
//             body: JSON.stringify({
//                 movieName
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             if (response.ok) {
//                 document.location.replace('/');
//             } else {
//                 alert(response.statusText);
//             }
//         })
//         .catch(err => {
//             alert('Unable to move movie to "Have Watched"');
//         })
//     })
// }

// if (document.querySelector("#ww-3")) {
//     document.querySelector("#ww-3").addEventListener("click", wwToHaveWatched)
// }

// if (document.querySelector("#ww-4")) {
//     document.querySelector("#ww-4").addEventListener("click", wwToHaveWatched)
// }

// if (document.querySelector("#ww-5")) {
//     document.querySelector("#ww-5").addEventListener("click", wwToHaveWatched)
// }


