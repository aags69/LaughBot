let container = document.querySelector(".jokeContainer")
let jokes = document.querySelector("#joke")
let cross = document.querySelector(".cross")
let but = document.getElementById("btn");
let type = document.querySelector(".typeHolder")

const generatedJokes = () => {
  // let joke = fetch("https://v2.jokeapi.dev/joke/Programming,Dark?type=twopart");
  let joke = fetch("https://official-joke-api.appspot.com/random_joke");
  joke.then((response) => {
    return response.json();
  }).then((value) => {
    // console.log(value);
    let mainJoke = value.setup;
    let punchline = value.punchline;
    let jokeType = value.type;
    jokes.innerHTML = `<span>${mainJoke}</span> <br>`;
      
    setTimeout(() => {
      jokes.innerHTML = jokes.innerHTML + `<span class = "punch"><b>${punchline}</span>`;
    }, 3000)
    type.innerHTML = `Category: ${jokeType}`;

  }).catch((error) => {
    console.log(error);
  })
}

but.addEventListener("click", (e) => {
  e.preventDefault()
  container.style.height = "500px";
  jokes.classList.add("active");
  cross.classList.add("active");
  type.classList.add("active");
  generatedJokes();
});
cross.addEventListener("click", (e) => {
  e.preventDefault()
  container.style.height = "200px";
  jokes.classList.remove("active");
  cross.classList.remove("active");
  type.classList.remove("active");
});

