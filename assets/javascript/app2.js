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

//var that stores user guesses
var userGuess = [];

//var that stores answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;

var time = 2;

//game starts with a screen displayig a start button
window.onload = function (){
	$('.quiz-container').hide();
	$('.results').hide();
	newGame();
}

// game
function newGame (){
	//user presses start
	$('.startButton').on('click', function (){
		//start timer
		countdown();
		//display timer
		$('.display').append("timer goes here");
		//hide start button
		$('.startButton').hide();
		//display quiz
		$('.quiz-container').show();
			//populate the prompt div with questions
			for (var i=0;i < triviaQuestions.length; i++){
				
				$("#quiz").append("<div>" + triviaQuestions[i].question +  "</div>");
				
				//populate choices div with possible answers
				for (var j = 0; j < triviaQuestions[i].answerList.length; j++) {
					
				$('#quiz').append(triviaQuestions[i].answerList[j] + ' <input type="radio" name="answer' + i + '" value="' + j + '">');
				
				}
				
				$('#quiz').append("<br><br>");
			}
	})
}
//timer
function countdown (){
	
	setTimeout(function (){
		
		//when time runs out
		if (time === 0){
		//show results
		$('.results').show();
		//hide quiz
		$('.quiz-container').hide();
		checkAnswers();
		}
		else {
			// decrease seconds by 1
			$('.display').html("00:" + time);
			time--;
			countdown();
		}
	}, 1000);
}

// check answers
function checkAnswers (){

	for (var i=0; i < triviaQuestions.length; i++){
		
		var a = $('input[name=answer' + i + ']:checked').val();
		
		if (a === undefined){
			noAnswers++;

		} else if (a == triviaQuestions[i].correctAnswer){
			correctAnswers++;
			
		}
		else {
			incorrectAnswers++;
			
		}
	}
	$('.answeredCorrect').html("Correct Answers: " + correctAnswers);
	$('.answeredIncorrect').html("Incorrect Answers: " + incorrectAnswers);
	$('.noAnswer').html("Not Answered: " + noAnswers);
}


$('.again').on('click', resetGame);

	function resetGame(){
		$('.startButton').show();
		$('.quiz-container').hide();
		$('.results').hide();
		newGame();
		correctAnswers = 0;
		incorrectAnswers = 0;
		noAnswers = 0;
		time = 60;
	}


	