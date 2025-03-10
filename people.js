// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

console.log(); //empty log for spacing reasons

const fullName = require('./names');
const hobbies = require('./hobbies');

// hyper-specific function made for a single person
function adventureTimeMagicMan() {
    return {
        name: fullName('Magic', 'Man'),
        hobbies: hobbies('magic', 'spells', 'torture')
    };
}

console.log("First function below returns a string");
console.log(`Hello ${adventureTimeMagicMan().name.firstName} ${adventureTimeMagicMan().name.lastName}, your wholesome hobbies are: ${adventureTimeMagicMan().hobbies[0]}, ${adventureTimeMagicMan().hobbies[1]} and ${adventureTimeMagicMan().hobbies[2]}.`);

console.log(); //empty log for spacing reasons

// a more dynamic version is the following
const [inputName, inputLastName] = ['Magic', 'Man']; // both could display inputs from a form or a prompt in the HTML
const [inputHobbyOne, inputHobbyTwo, inputHobbyThree] = ['magic', 'spells', 'torture']; // as above

function getPersonWithHobbies(yourFirstName, yourLastName, yourHobbyOne, yourHobbyTwo, yourHobbyThree) {
    return {
        name: fullName(yourFirstName, yourLastName),
        hobbies: hobbies(yourHobbyOne, yourHobbyTwo, yourHobbyThree)
    };
}

// but it's gonna be uselessly long to log as before, so I decided to use the default console.log() approach
console.log("Second function below returns an Object using the 2 imported functions");
console.log(getPersonWithHobbies(inputName, inputLastName, inputHobbyOne, inputHobbyTwo, inputHobbyThree));

console.log(); //empty log for spacing reasons


// node people.js