// Selectors 

const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const quoteBtn = document.querySelector("#quoteBtn");

// Event Listeners 

quoteBtn.addEventListener('click', generateQuote);

// Function
function generateQuote() {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(result =>{
        const randomNum = Math.floor(Math.random()*result.length);
        const randomQuote = result[randomNum];
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = "__"+ randomQuote.author;
    });
};

generateQuote();