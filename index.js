// Code your solutions in this file
function writeCards(people) {
    let array = [];

    for(let i = 0; i < people.length; i++) {
        let person = people[i];
        array.push('Thank you, '+ person +', for the wonderful surprise gift!')
    }
    return array;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
        i--;
    }
}