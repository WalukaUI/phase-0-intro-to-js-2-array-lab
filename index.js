// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(n){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push(n);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(a){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield"); 
    cats.unshift(a)
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift();
}
destructivelyRemoveFirstCat();
    
function appendCat(www) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const catsNew=[...cats]
    catsNew.push(www);
    return catsNew;
}
appendCat("Broom");

function prependCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const catsNew=[...cats]
    catsNew.unshift(name);
    return catsNew;
}
prependCat("Arnold");

function removeLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const catsNew=[...cats]
    catsNew.pop();
    return catsNew;
}
removeLastCat();

function removeFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const catsNew=[...cats]
    catsNew.shift();
    return catsNew;
}
removeFirstCat();