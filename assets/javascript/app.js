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

var userChoice;
/* on load */
resetGame();

//game begins with screen displaying "start" button only
	function resetGame (){
		$("button").text("START");
		$(".quiz-container").hide();
	}

//when user presses start, the following is displayed:
//a list of questions with multiple choice buttons underneath them
	$("button").on("click", function newGame (){
		//when start is clicked
		//remove start button
		$("button").hide();
		//display quiz
		$(".quiz-container").show();
		// display timer
		var count=10;

		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer()
		{
		count=count-1;
		if (count <= 0)
		{
		clearInterval(counter);
		//counter ended, do something here
		return;
  		}
  		//display timer here
		$(".display").html("00:" + count);
		//display question
		$(".prompt0").html(triviaQuestions[0].question);
		$(".prompt1").text(triviaQuestions[1].question);
	}})
