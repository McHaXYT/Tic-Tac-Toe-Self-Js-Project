const mainSquare = document.querySelectorAll('.container');
const xChoice = document.getElementById('xchoice');
const oChoice = document.getElementById('ochoice');
const resultDisplay = document.getElementById('result-display');
const restartBtn = document.getElementById('restart-btn');
const turnDisplay = document.getElementById('turn-span');
var containerArray = [mainSquare]
var clickedArray = []
let playerChoice = 'not chosen'
let win = false

function checkWin() {
    for (let i = 0; i <= containerArray.length; i++) {
        square1 = containerArray[i][0]
        square2 = containerArray[i][1]
        square3 = containerArray[i][2]
        square4 = containerArray[i][3]
        square5 = containerArray[i][4]
        square6 = containerArray[i][5]
        square7 = containerArray[i][6]
        square8 = containerArray[i][7]
        square9 = containerArray[i][8]
        // Horizantol Square Checks
        if (square1.classList.contains('square-inside')&&
            square2.classList.contains('square-inside')&&   
            square3.classList.contains('square-inside')    
        ) {
            resultDisplay.textContent = 'X Won'   
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square4.classList.contains('square-inside')&&square5.classList.contains('square-inside')&&square6.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won'    
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square7.classList.contains('square-inside')&&square8.classList.contains('square-inside')&&square9.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won' 
            resultDisplay.classList.add('green')
            turnDisplay.textContent = 'Turns Complete'    
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
            // Vertical Square Checks
        } else if (square1.classList.contains('square-inside')&&square4.classList.contains('square-inside')&&square7.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won'  
            resultDisplay.classList.add('green')   
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square2.classList.contains('square-inside')&&square5.classList.contains('square-inside')&&square8.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won' 
            resultDisplay.classList.add('green')    
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square3.classList.contains('square-inside')&&square6.classList.contains('square-inside')&&square9.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won'   
            resultDisplay.classList.add('green')  
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
            // Diagonal Square Checks
        } else if (square1.classList.contains('square-inside')&&square5.classList.contains('square-inside')&&square9.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won'    
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square3.classList.contains('square-inside')&&square5.classList.contains('square-inside')&&square7.classList.contains('square-inside')) {
            resultDisplay.textContent = 'X Won'    
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
            // Horizantal Circle Checks
        } else if (square1.classList.contains('circle-inside')&&square2.classList.contains('circle-inside')&&square3.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'
            resultDisplay.classList.add('green')     
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square4.classList.contains('circle-inside')&&square5.classList.contains('circle-inside')&&square6.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'    
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square7.classList.contains('circle-inside')&&square8.classList.contains('circle-inside')&&square9.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'   
            resultDisplay.classList.add('green')  
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
            // verticall Circle Checks
        } else if (square1.classList.contains('circle-inside')&&square4.classList.contains('circle-inside')&&square7.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'  
            resultDisplay.classList.add('green')   
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square2.classList.contains('circle-inside')&&square5.classList.contains('circle-inside')&&square8.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'  
            resultDisplay.classList.add('green')   
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square3.classList.contains('circle-inside')&&square6.classList.contains('circle-inside')&&square9.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'  
            resultDisplay.classList.add('green')   
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
            // Diagonal Cricle Checks
        } else if (square1.classList.contains('circle-inside')&&square5.classList.contains('circle-inside')&&square9.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'  
            resultDisplay.classList.add('green')   
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (square3.classList.contains('circle-inside')&&square5.classList.contains('circle-inside')&&square7.classList.contains('circle-inside')) {
            resultDisplay.textContent = 'O Won'    
            resultDisplay.classList.add('green') 
            turnDisplay.textContent = 'Turns Complete'
            win = true
            if (win === true) {
                playerChoice = 'no'
            }
        } else if (clickedArray.length >= 9) {
            resultDisplay.textContent = 'Draw !'
            turnDisplay.textContent = 'Turns Complete'
        } else if (playerChoice === 'not chosen') {
            resultDisplay.classList.remove('green')
            resultDisplay.classList.add('red')
            resultDisplay.textContent = 'First Chose Your Symbol !'
        } else {
            resultDisplay.textContent = 'Keep Playing !'
        }
    }
}

xChoice.addEventListener('click', function() {
    playerChoice = 'x'
    resultDisplay.classList.remove('red')
    resultDisplay.textContent = 'You Have Chosen X'
    turnDisplay.textContent = "Player X Turn"
});

oChoice.addEventListener('click', function() {
    playerChoice = 'o'
    resultDisplay.classList.remove('red')
    resultDisplay.textContent = 'You Have Chosen O'
    turnDisplay.textContent = "Player O Turn"
});

mainSquare.forEach(function(sqaure) {
    sqaure.addEventListener('click', function() {
        if (playerChoice === 'o') {
            if (sqaure.childElementCount >= 1) {
            
            } else {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                sqaure.appendChild(circle);
                sqaure.classList.add('circle-inside');
                playerChoice = 'x'
                turnDisplay.textContent = "Player X Turn"
                clickedArray.push(circle.parentElement);
            }
        } else if (playerChoice === 'no') {
            sqaure.removeEventListener('click')
        } else if (playerChoice === 'x') {
            if (sqaure.childElementCount >= 1) {
            
            } else {
                const squareDiv = document.createElement('div');
                squareDiv.classList.add('square');
                sqaure.appendChild(squareDiv);
                sqaure.classList.add('square-inside');
                playerChoice = 'o'
                turnDisplay.textContent = "Player O Turn"
                clickedArray.push(squareDiv.parentElement);
            }
        }
        checkWin()   
    });
});

restartBtn.addEventListener('click', function() {
    mainSquare.forEach(function(square) {
        if (square.classList.contains('square-inside')) {
            square.classList.remove('square-inside');
            square.innerHTML = ''
        } else if (square.classList.contains('circle-inside')) {
            square.classList.remove('circle-inside');
            square.innerHTML = ''
        } else {
            square.innerHTML = ''
        }
    });
    resultDisplay.textContent = ''
    resultDisplay.classList.remove('green')
    resultDisplay.classList.remove('red')
    clickedArray = []
    playerChoice = 'not chosen'
    turnDisplay.textContent = ''
});

















