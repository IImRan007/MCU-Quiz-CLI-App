var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + "! How well do you know MCU?");

console.log("Let's Play MCU Quiz!!");
console.log("--------");

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(chalk.blue(question));

  if(userAnswer === answer){
    console.log(chalk.green("You are Right!"));
    score = score + 1;
  }else{
    console.log(chalk.red("You are Wrong!"));
  }

  console.log("Score: " + score)
  console.log("---------");
}

var questions=[{
  question:"1.How many Infinity Stones are there? ",
  answer:"Six",
},{
  question:"2.Where is Captain America from? ",
  answer:"Brooklyn",
},{
  question:"3.Who is Tony Stark's Father? ",
  answer:"Harvard Stark",
},{
  question:"4.What type of Doctor is Doctor Strange? ",
  answer:"Neurosurgeon",
},{
  question:"5.Captain America's shield is made of? ",
  answer:"Vibranium",
},{
  question:"6.Who was able to pick up Thor's Hammer in EndGame? ",
  answer:"Captain America",
},{
  question:"7.In which movie did Spider-Man make his first appearance in the MCU? ",
  answer:"Captain America Civil War",
},{
  question:"8.Wanda and her brother Pietro are from where? ",
  answer:"Sokovia",
},{
  question:"9.On what planet was the Soul Stone in Infinity War? ",
  answer:"Vormir",
},{
  question:"10.Black Panther is set in which fictional country? ",
  answer:"Wakanda" , 
},];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.green("YAY! You Scored: " + score + " Points"));