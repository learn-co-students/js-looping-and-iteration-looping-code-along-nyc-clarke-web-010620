const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

function writeCards(array, event_name){
    let notes = []
    for (let i = 0; i < array.length; i++) {
        notes.push(`Thank you, ${array[i]}, for the wonderful ${event_name} gift!`)
    }
    return notes;
}

function countDown(integer) {
    let counter = integer
    while(counter >= 0 ) {
        console.log(counter--);
    }
}