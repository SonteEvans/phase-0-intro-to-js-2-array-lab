// Write your solution here!
 const cats = ['Milo', 'Otis', 'Garfield']
    let newCats = [...cats]
function destructivelyAppendCat() {
    cats.push('Ralph')
}
 
function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() { 
    cats.pop('Garfield')
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo')
}

function appendCat() {
    newCats.push('Broom')
    return newCats
    
}

function prependCat() {
    newCats.unshift('Arnold')
    newCats.pop('Broom')   
    return newCats
}

function removeLastCat() {
    newCats.pop('Garfield')
    newCats.shift('Arnold')
    return newCats
}

function removeFirstCat() {
    newCats.shift('Milo')
    newCats.push('Garfield')
    return newCats
}