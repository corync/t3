/*----- constants -----*/


/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win; 

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

const messages = document.querySelector('h2');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    render();

    };

init();

function render() {
        board.forEach(function(mark, index){
        console.log(mark, index);

        //this sets the text content of the square of the same position to the mark on the board.
        squares[index].textContent = mark;
        });

        // changes message to let user know who's turn it is 
        messages.textContent = `It's ${turn}'s turn!`;
        };

function handleTurn(event) {
            let idx = squares.findIndex(function(square) {
            return square === event.target;
            });

            board[idx] = turn;
            // check your console logs to make sure it's working!
            console.log(board);

            // ternary structure 
            // <condition> ? <if condition is true, this> : <else if condition is false, this>
            // set turn based on structure 

            turn = turn === 'X' ? 'O' : 'X'; 

            // short hand for if statement 
            win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;

            
            render();
            console.log(win);

            };

           
            