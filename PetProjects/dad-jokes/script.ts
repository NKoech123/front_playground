const jokeEl = document.getElementById('joke');
//const jokeBtn = document.getElementById('jokeBtn'); not required
const url = 'https://icanhazdadjoke.com';

//Using async/await
const generateJoke = async() => {
    const config ={
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch(url, config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke

}
