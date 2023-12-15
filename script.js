let quotes = [
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    author: "― Marilyn Monroe",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "― Dr. Seuss",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend",
    author: "― Albert Camus",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "― Maya Angelou",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "― Martin Luther King",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "― Gandhi",
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "― Narcotics",
  },
];

let quote = document.querySelector("q");
let author = document.querySelector("span");
let currentIndex = 0;

quote.textContent = quotes[currentIndex].quote;
author.textContent = quotes[currentIndex].author;

let generateQuote = () => {
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * quotes.length);
} while (randomNum === currentIndex);

currentIndex = randomNum;

  quote.textContent = quotes[randomNum].quote;
  author.textContent = quotes[randomNum].author;
};
