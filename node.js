var readlineSync = require("readline-sync");

var score = 0
var highScores = [

  {
    name: " ramesh",
    score: -350
  },
  {
    name: "ashutosh",
    score: -50
  }
]
console.log("QUIZ ON WEB SERIES")


var userName = readlineSync.question("what is your name ? ")

console.log("HEY " + userName + " Welcome, to KILLTHEMUSIC'S QUIZZ !!!!")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log(" you are right ")
    console.log("-----------------")
    score = score + 100
    console.log("your score is ", score)
  }
  else {
    console.log("you are wrong !!!!!!")
    score = score - 50
    console.log("your score is; ", score)
    console.log("-----------------")
  }
}
var questions = [{
  question: "What ANIMAL IS BOJACK HORSEMAN?",
  answer: "horse"
}, {
  question: "WHO PLAYS THOMAS SHELBY",
  answer: "cillian murphy"
}, {
  question: "In which English city is the show set?",
  answer: "Birmingham"
}, {
  question: "What is Polly's surname?",
  answer: "gray"
}, {
  question: "What Sitcom Did Bojack Star In In The 90s?",
  answer: "horsin around"
}, {
  question: "With whom Rick frequently goes for adventures?",
  answer: "morty"
}, {
  question: "What is the name of Morty’s 17 years old sister?",
  answer: "summer"
}, {
  question: "What is the name of the secret society of time travellers in the web series 'dark'?",
  answer: "sic mundus creatus est"
}

]


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if (score > 0) {
  console.log("Yay!!!! your score is ", score, "/900");
}
else {
  console.log("Sorry !! your score is ", score, "/900");

}

console.log("Check out the high scores, if you should be there send me a screenshotm and I'll update it");

highScores.map(score => console.log(score.name, " : ", score.score))

