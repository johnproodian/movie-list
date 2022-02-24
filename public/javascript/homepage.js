async function getMovies() {
    const response = await fetch('api/movies', {
        method: 'post',
        //not sure what to put here/if anything else is needed
    });
    document.getElementsByName('movieName'); // not sure if this is the right way to get movie

    if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
    }
}
getMovies()

// or should it be like this 

async function getMovies() {
    const response = await fetch('api/movies');
    document.getElementsByName('movieName');
}

getMovies()
.catch(error => {
    console.log(error);
});




async function watchedMovies() {
    const response = await fetch('api/movies', {
        method: 'post',

    });
    document.getElementsById('userId') //maybe user id since it will be in there watched list?

    if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
    }
}