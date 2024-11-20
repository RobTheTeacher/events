const showContent = event => console.log(event.target.textContent)

document.querySelector(".porcupine").onclick = showContent;

document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName)

//window.onclick = event => console.log(event.target)

document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase())

//window.onclick = event => console.log(event.target.textContent.toUpperCase())

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love Pelicans!")
    }
}

document.querySelector(".pelican").addEventListener("click", pelicanLove)

const birdLove = animal => console.log(`${animal} is a pretty boy`);

document.querySelector(".parrot").addEventListener("click", event => birdLove(event.target.textContent))
document.querySelector(".peacock").addEventListener("click", event => birdLove(event.target.textContent))

const notAnteater = () => console.log("I am NOT an anteater")
const notArmadillo = () => console.log("I am NOT an armadillo")

document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo, { once: true });

// let x = document.querySelectorAll(".tab")
// console.log(x)
// let tabs = Array.from(x);

// tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))

const bestAnimal = animal =>
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best!`)


//     if (animal.toLowerCase() === "panther") {
//         console.log(`${animal} is the jungle assassin`)
//     } else {
//         console.log(`${animal} is the best!`);
//     }
// }'

let animalTabs = Array.from(document.querySelectorAll(".tab"));

animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))

document.querySelector("footer p span").addEventListener("click", () => console.log("Span"))

document.querySelector("footer").addEventListener("click", () => console.log("Footer"), true)

document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph"), true)

const setActive = (clickedTab) => {
    animalTabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent;
}

animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

let animalContent = Array.from(document.querySelectorAll(".content"));

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
    findContent(tab.textContent.toLowerCase())
}));

animalTabs.forEach(tab => tab.addEventListener("mouseleave", () =>
     animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
))


let searchInput = document.querySelector("#search");

const findTab = () => {
    animalTabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add('active')
        } else {
            tab.classList.remove('active')
        }
    })
}

searchInput.addEventListener("input", findTab)

function sayHi(person) {
    console.log(sayHi(person))
}
function Country(name, capitalCity, language, population, sports) {
    this.name = name,
    this.capitalCity = capitalCity,
    this.language = language,
    this.population = population,
    this.sports = sports,
    this.description = () => console.log(`${this.name}'s population is ${this.population}`)
}

let sweden = new Country("Sweden","Stockholm", "Svenska", 11000000, ["Hockey", "Brandboll", "Bandy"]);
let pakistan = new Country("Pakistan", "Islamabad", "Urdu", 24100000, ["Cricket", "Hockey"] );
let australia = new Country("Aussie", "Canberra", "Stayan", 13000, ["Cricket", "Football"] );

let countries = [sweden, pakistan, australia];

countries.forEach(country => country.description());
