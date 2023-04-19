'use strict'

const randomChuckNorrisJoke = () => {

    fetch('https://api.chucknorris.io/jokes/random')
    .then((data) => { return data.json(); })
    .then((json) => { console.log(json.value); })
    .catch((error) => { console.error(error); });
};

randomChuckNorrisJoke();

