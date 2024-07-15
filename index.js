/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
} */

/* const gifts = ["teddy bear" , "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
};

wrapGifts(gifts); */

// const names = ["Moshe", "Mendy", "Levi"];

function writeCards(names, event) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    console.log(messages);
    return messages;
}

// writeCards(["Moshe", "Mendy", "Levi"], "birthday");

function countDown() {
    let count = 10;

    while (count >= 0) {
        console.log(count);
        count--;
        debugger;
    }
}

countDown();
