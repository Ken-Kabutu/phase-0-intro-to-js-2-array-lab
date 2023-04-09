// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    let newCatsArr1 = cats.slice();
    newCatsArr1.push(Broom);
    return newCatsArr1
}

function prependCat(Arnold) {
    let newcatsArr2 = cats.slice();
    newcatsArr2.unshift(Arnold);
    return newcatsArr2
}

function removeLastCat() {
    let newCatsArr3 = cats.slice();
    newCatsArr3.pop();
    return newCatsArr3;
}

function removeFirstCat() {
    let newCatsArr4 = cats.slice();
    newCatsArr4.shift();
    return newCatsArr4;
}


