// Code your solutions in this fi

function writeCards(arr,event){
    let cards = []
    for(let i = 0; i < arr.length; i++){
        cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }
        return cards
}

function countDown(num){
    while (num >0) {
        console.log(num)
        num -= 1 
    }
    console.log(num)
}