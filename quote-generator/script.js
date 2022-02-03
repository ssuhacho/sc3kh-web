//In the parenthesis, the ID should matche to the ID in the html file.
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//because the value of apiQuotes will be changing, use 'let' instead of 'const'.
let apiQuotes = [];

//Show New Quote
function newQuote(){
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //console.log(quote);

  //Before assigning, Check if Author field is blank and replace it with 'Unknown'
  if (!quote.quthor){
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  //For longer quotes, change the font-size.
  //Check the Quote length to determine styling.
  if (quote.text.length > 120){
    //adding the CSS class
    quoteText.classList.add('long-quote');
  } else{
    //remove the CSS class
    quoteText.classList.remove('long-quote');
  }
  //Get the author obj and text obj in the file and then assign the value using text content.
  //textContent will allow us to pass in a string that is shown in authorText element.
  quoteText.textContent = quote.text;
}

//Get Quotes from API
async function getQuotes(){
  const apiUrl = 'https://type.fit/api/quotes';
  try{
    //this const will not be populated until it fetchs some data from the API.
    //try to set the const response only when it has data.
    const response = await fetch(apiUrl);

    //getting the json from api as a response then turning the response into json object.
    //then pass that into global var apiQuotes
    apiQuotes = await response.json();

    //console.log(apiQuotes[12]);
    newQuote();

  } catch (error){
    alert (error);
    //Catch Error Here
  }
}

//Tweet Quote
function tweetQuote(){
  //?text: 'query parameter' called text
  //${}: The reason why using 'template string' is it allows us to pass in a var and then it will be converted into a string.
  const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  //open a window using the twitterUrl with a new tab.
  window.open(twitterUrl, '_blank');
}

//Event Listeners
//target the 'click event' then run newQuote function
newQuoteBtn.addEventListener('click', newQuote);
//target the 'click event' then run tweetQuote function
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuotes();