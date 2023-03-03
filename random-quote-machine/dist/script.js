import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

// Create list of quotes
const quoteList = [
{ text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', author: "Nelson Mandela" },
{ text: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."', author: "Thomas A. Edison" },
{ text: '"Try not to become a man of success. Rather become a man of value."', author: "Albert Einstein" },
{ text: '"You miss 100% of the shots you don\'t take."', author: "Wayne Gretzky" },
{ text: '"Believe you can and you\'re halfway there."', author: "Theodore Roosevelt" }];


// Create QuoteBox component
const QuoteBox = ({ quote, postNewQuote }) => /*#__PURE__*/
// User story #1: Create wrapper element with with id="quote-box" 
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/

React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/

React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { class: "action" }, /*#__PURE__*/

React.createElement("button", { id: "new-quote", class: "button", onClick: postNewQuote }, "New Quote"), /*#__PURE__*/



React.createElement("a", { href: "twitter.com/intent/tweet", id: "tweet-quote", target: "_blank" }, "Tweet")));






// Create function to get random number
const getRandomIndex = () =>
Math.floor(Math.random() * (quoteList.length - 1));

// Create App component 
const App = () => {
  // User story #6 & #7: Quote machine displays random quote in element id="text" and id="author"
  const [quote, setQuote] = React.useState(quoteList[getRandomIndex()]);
  // User story #8 #9: When #new-quote button is clicked,quote machine fetch a new quote and author to display it in its element
  const postNewQuote = () => {
    setQuote(quoteList[getRandomIndex()]);
  };
  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/

    React.createElement(QuoteBox, { quote: quote, postNewQuote: postNewQuote })));

};

// Call reactDOM to render App
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));