/*----- constants -----*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win; 
let winner;
let xWins = 0;
let oWins = 0;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

const messages = document.querySelector('h2');

const numberWins = document.querySelector('h3');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    win = null;
    winner = null;

    render();

    };

init();

function render() {
        board.forEach(function(mark, index){
        console.log(mark, index);

        //this sets the text content of the square of the same position to the mark on the board.
        squares[index].textContent = mark;
        });

        // changes message to let user know who's turn it is or who won
        messages.textContent = win === 'T' ? `That's a tie! Play again!` : // if win = T "tie", tie message
                            win ? `${win} wins the game!` : // else if win is another letter, winner wins message
                            `It's ${turn}'s turn!`; // else it is the turn's turn 


        // save number of each players wins
        //if (winner === 'X' && win != null)
        //{xWins++;}
        //else if (winner === 'O' && win != null)
        //{oWins++; }

        win != null && winner === 'X' ? xWins++ : winner === 'O'? oWins++ : oWins; 
        
        numberWins.textContent = `Number of X Wins: ${xWins} | Number of O Wins: ${oWins}`;
        };

function handleTurn(event) {
            let idx = squares.findIndex(function(square) {
            return square === event.target;
            });

            // Only change the board space if it's empty 
            if (board[idx] === "" && win === null){
                board[idx] = turn;
                
            // check your console logs to make sure it's working!
            console.log(board);

            // ternary structure 
            // <condition> ? <if condition is true, this> : <else if condition is false, this>
            // set turn based on structure 

            turn = turn === 'X' ? 'O' : 'X'; 

            win = getWinner();

            render();
            
        } 

            console.log(win);

            };

           
function getWinner() {
                    winner = null;

                    winningCombos.forEach(function(combo, index) {

                        if (board[combo[0]] &&
                            board[combo[0]] === board[combo[1]] &&
                            board[combo[0]] === board[combo[2]]) {
                                winner = board[combo[0]];
                            }
                    });
                    
                    // add ternary statement to check if Tie 
                    return (winner ? winner : // if winner not null, return winner
                            board.includes('') ? // if board contains empty space 
                            null : 'T'); // return null, else return tie 
                };