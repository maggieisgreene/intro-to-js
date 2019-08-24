// es6
const sayMyName = (first, last) => {
    return `${first} ${last}`;
}

console.log(sayMyName('Maggie', 'Greene'));

const nuggetizer = (animal) => {
    return `${animal} nugget`;
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('John Wark'));

const printToDOM = (toPrint)  => {
    document.getElementById('output').innerHTML += toPrint;
}

printToDOM('Maggie');

let bandNumber = 1;

const takeNumber = (bandName) => {
    printToDOM(`<p>${bandNumber}. ${bandName}🥰</p>`);
    bandNumber++;
}

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber('Whatever Forever');