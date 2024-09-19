// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

// wrapGifts(gifts);

function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        // console.log(thankYouMessages[i]);
        // debugger;
    }

    // debugger;
    // console.log(thankYouMessages);
    return thankYouMessages;
}

// writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

// countDown();
