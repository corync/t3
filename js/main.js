/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;
let turn = 'X'

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

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
        };

function handleTurn(event) {
            let idx = squares.findIndex(function(square) {
            return square === event.target;
            });

            board[idx] = turn;
            // check your console logs to make sure it's working!
            console.log(board);


            };

