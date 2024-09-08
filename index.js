var qoutes = [
  {
    qoute: "Be yourself; everyone else is already taken.",
    author: "--Oscar Wilde",
  },
  {
    qoute:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "--Oscar Wilde",
  },
  {
    qoute: "So many books, so little time.",
    author: "--Frank Zappa",
  },
  {
    qoute:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "--Albert Einstein",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: "--Marcus Tullius Cicero",
  },
  {
    qoute:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "--Bernard M. Baruch",
  },
  {
    qoute:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "-- Dr. Seuss",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough",
    author: "--Mae West",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: "--Mahatma Gandhi",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "--Robert Frost",
  },
];

var lastRandomNumber = null;

function getQuote() {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * qoutes.length);
  } while (randomNumber === lastRandomNumber);

  lastRandomNumber = randomNumber;

  document.getElementById("quote").innerHTML =
    '" ' + qoutes[randomNumber].qoute + ' "';
  document.getElementById("author").innerHTML = qoutes[randomNumber].author;
}
