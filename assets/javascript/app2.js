var triviaQuestions = [{
	question: "What does the Statue of Liberty hold in her right hand?",
	answerList: ["A book", "A torch", "A scale", "Nothing"],
	correctAnswer: 1
},{
	question: "What does the U.S. motto 'E pluribus unum' mean?",
	answerList: [" 'Out of many, one' ", " 'Together, as one' ", " 'One, for many' ", " 'United, as one' "],
	correctAnswer: 0
},{
	question: "Which state have the most presidents come from?",
	answerList: ["Virginia", "Delaware", "Massachusetts", "Connecticut"],
	correctAnswer: 0
},{
	question: "Which city is furthest west?",
	answerList: ["Portland, OR", "Seattle, WA", "Reno, NV", "Los Angeles, CA"],
	correctAnswer: 2
},{
	question: "How many time zones does the U.S. have?",
	answerList: ["Three", "Four", "Five", "Six"],
	correctAnswer: 3
},{
	question: "Which is the smallest state, geographically?",
	answerList: ["Rhode Island", "Connecticut", "Vermont", "Delaware"],
	correctAnswer: 0
},{
	question: "Which one of these men was not part of the Confederate Army during the Civil War?",
	answerList: ["Braxton Bragg", "Ulysses S. Grant", "Robert E. Lee", "Jefferson Davis"],
	correctAnswer: 1
},{
	question: "Which country of origin had the most immigrants pass through Ellis Island?",
	answerList: ["Austria", "Russia", "Italy", "Germany"],
	correctAnswer: 2
},{
	question: "The Declaration of Independence was signed in?",
	answerList: ["1779", "1776", "1766", "1775"],
	correctAnswer: 1
},{
	question: "What was the last state to join the U.S.?",
	answerList: ["Alaska", "Washington", "Puerto Rico", "Hawaii"],
	correctAnswer: 3
},
];

//vars that stores user guesses
var userGuess = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;

//make countdown timer


//game starts with a screen displayig a start button
window.onload = function() {
	$('.quiz-container').hide();
	newGame();
}

function newGame (){
	//user presses start
	$('button').on('click', function (){
		//hide start button
		$('.startButton').hide();
		//display quiz
		$('.quiz-container').show();
		//display countdown
		$('.display').append("timer goes here");
			//populate the prompt div with questions
			for (i=0;i < triviaQuestions.length; i++){
				$('.prompt').append(triviaQuestions[i].question + "<br>");
					console.log(triviaQuestions[i].question);
			}
			//populate the choices div with answerList
			for (i = 0; i < triviaQuestions.length; i++) {
				$('.choices').append(triviaQuestions[i].answerList + '<input type="radio" name="radio_group">');
			}	
		})
}

/* GAME LOGIC */

//when time runs out, display a results page

	//if the userGuess matches the correctAnswer, increase correctAnswers by 1
		// if it doesnt match the correctAnswer, increase incorrectAnswers by 1
			// if there was no answer, increase noAnswers by 1
	
	//display play again? button