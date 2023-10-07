const buttons = document.querySelectorAll("button:not(.operand)");
const abilitiesButtons = document.querySelectorAll(".abilities");

calcScreen = document.getElementById("calcDisplay");
currentAnswer = "";
numOfOps = 0;
atLeast1equal = 0;

const equalButton = document.getElementById("equals");
equalButton.addEventListener("click", equalsOperand);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearOperand);

for (let button of buttons) {
	button.addEventListener("click", putNumber);
}

for (let abilities of abilitiesButtons) {
	abilities.addEventListener("click", updateOperation);
}

function putNumber(event) {
	if (
		(event.currentTarget.innerText == "+" ||
		event.currentTarget.innerText == "-" ||
		event.currentTarget.innerText == "x" ||
		event.currentTarget.innerText == "/") && calcScreen.value == "")
	{
		return false;
	}

	if(calcScreen.value == "NaN" || calcScreen.value == "Undefined"){
		clearOperand()
	}


	const buttonNum = event.currentTarget.innerText;

	calcScreen.value += buttonNum;
	currentAnswer += buttonNum;
}

function equalsOperand() {
	if (numOfOps > 1) {
		alert("Please keep the number of operations to one");
		return false;
	}
	if (calcScreen.value == "") {
		return false;
	}
	atLeast1equal +=1;

	answerArray = [];
	switch (operation) {
		case "+":
			answerArray = currentAnswer.split("+");
			number1 = parseInt(answerArray[0]);
			number2 = parseInt(answerArray[1]);

			tempAnswer = Number((number1 + number2).toFixed(2));

			calcScreen.value = tempAnswer;
			currentAnswer = tempAnswer;
			numOfOps = 0;
			break;

		case "-":
			answerArray = currentAnswer.split("-");
			number1 = parseInt(answerArray[0]);
			number2 = parseInt(answerArray[1]);

			tempAnswer = Number((number1 - number2).toFixed(2));

			calcScreen.value = tempAnswer;
			currentAnswer = tempAnswer;
			numOfOps = 0;
			break;

		case "x":
			answerArray = currentAnswer.split("x");
			number1 = parseInt(answerArray[0]);
			number2 = parseInt(answerArray[1]);

			tempAnswer = Number((number1 * number2).toFixed(2));

			calcScreen.value = tempAnswer;
			currentAnswer = tempAnswer;
			numOfOps = 0;
			break;

		case "/":
			answerArray = currentAnswer.split("/");
			number1 = parseInt(answerArray[0]);
			number2 = parseInt(answerArray[1]);
			if(number2 == 0){
				calcScreen.value = "Undefined"
				return
			}
			tempAnswer = Number((number1 / number2).toFixed(2));

			calcScreen.value = tempAnswer;
			currentAnswer = tempAnswer;
			numOfOps = 0;
			break;

		default:
			alert("error");
	}
}

function clearOperand() {
	currentAnswer = "";
	calcScreen.value = "";
	numOfOps = 0;
}

function updateOperation(event) {
	if (calcScreen.value == "") {
		alert("Please enter a number first");
		return false;
	}

	const operatorValue = event.currentTarget.innerText;
	operation = operatorValue;
	numOfOps += 1;
}
