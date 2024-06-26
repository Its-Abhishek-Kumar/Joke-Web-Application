const button = document.getElementById('btn');
const jokes = document.getElementById('joke');

// Using Async Await
const displayJoke = async () => {
    try {
        const setHeader = {
            headers:{
                Accept: 'application/javaScript'
            }
        }
     const res = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky?type=single', setHeader);
     const data = await res.json();
     jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(error);
    }
    
 }

button.addEventListener('click', displayJoke);
displayJoke();