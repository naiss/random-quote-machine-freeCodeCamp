const quotes = [
    {
        quote: `"May the Force be with you."`,
        writer: `– Star Wars`
    },
    {
        quote: `"Here's looking at you, kid."`,
        writer: `– Casablanca`
    },
    {
        quote: `"You can't handle the truth!"`,
        writer: `– A Few Good Men`
    },
    {
        quote: `"I'll be back."`,
        writer: `– The Terminator`
    },
    {
        quote: `"There's no place like home."`,
        writer: `– The Wizard of Oz`
    },
    {
        quote: `"I'm king of the world!"`,
        writer: `– Titanic`
    },
    {
        quote: `"You had me at 'hello.'"`,
        writer: `– Jerry Maguire`
    },
    {
        quote: `"Just keep swimming."`,
        writer: `– Finding Nemo`
    },
    {
        quote: `"To infinity and beyond!"`,
        writer: `– Toy Story`
    },
    {
        quote: `"Life is like a box of chocolates; you never know what you're gonna get."`,
        writer: `– Forrest Gump`
    },
    {
        quote: `"Hasta la vista, baby."`,
        writer: `– Terminator 2: Judgment Day`
    },
    {
        quote: `"You talking to me?"`,
        writer: `– Taxi Driver`
    },
    {
        quote: `"I feel the need... the need for speed."`,
        writer: `– Top Gun`
    },
    {
        quote: `"You are a wizard, Harry."`,
        writer: `– Harry Potter and the Sorcerer's Stone`
    },
    {
        quote: `"There's no crying in baseball!"`,
        writer: `– A League of Their Own`
    },
    {
        quote: `"I see dead people."`,
        writer: `– The Sixth Sense`
    },
    {
        quote: `"I coulda been a contender."`,
        writer: `– On the Waterfront`
    },
    {
        quote: `"Houston, we have a problem."`,
        writer: `– Apollo 13`
    },
    {
        quote: `"You can't sit with us!"`,
        writer: `– Mean Girls`
    },
    {
        quote: `"Here's Johnny!"`,
        writer: `– The Shining`
    }
];


let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");



btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);  
    quote.innerHTML = quotes[random].quote;   
    writer.innerHTML = quotes[random].writer;
})
