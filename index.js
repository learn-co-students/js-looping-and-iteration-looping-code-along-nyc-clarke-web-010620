// Code your solutions in this file


function writeCards(cards){
    let arr = []
    for (let i = 0; i < cards.length; i++) {
        arr.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }

    return arr;
}


function countDown(num){

    for (let i = num; i > -1; i--){
        console.log(i)
    }


}