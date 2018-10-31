"use strict";
import quotes from './quotes';

/*
  Generates a random number based on input length
*/ 
const randomNum = function(arr){
  return Math.floor(Math.random() * arr.length);
}

/*
  Selects a random author and quote
*/
const pickAuthor = function(arr){
  const pickAuthor = arr[randomNum(arr)];
  const author = pickAuthor.author;
  const quoteArr = pickAuthor.quote;
  const pickQuote = quoteArr[randomNum(quoteArr)];

  const displayAuthor = document.getElementById("authorText");
  displayAuthor.textContent = author;

  const displayQuote = document.getElementById("quoteText");
  displayQuote.textContent = pickQuote;
}

const newQuote = document.getElementById("getQuote");
newQuote.addEventListener("click", function(){
  pickAuthor(quotes);
});

/*
  Opens a new window and populates tweet area with quote and author
*/ 
const openTweet =  function (){
  const windowFeature = `height = 500px, width = 450px, 
                          menubar = yes, toolbar = yes, resizable = yes, 
                          location = yes, titlebar = yes, status = yes`;

  let url = "https://twitter.com/intent/tweet?&text=";
  let text = document.getElementById("quoteText").innerText;
  let authorTweet = document.getElementById("authorText").innerText; 
  let tweetUrl = `${url}${text} -${authorTweet}`;
  window.open(tweetUrl,"tweet", windowFeature);
}

const tweet = document.getElementById("tweetQuote");
tweet.addEventListener("click", openTweet);