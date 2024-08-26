// lib/main.js

export const BOARD_SIZE = 3;

export function printBoard(board) {
    let cell = 0;
    console.log("\t ......................");
    for (let row = 0; row < board.length; row++) {
        let rowOutput = "\t |";
        for (let column = 0; column < board[row].length; column++) {
            rowOutput += ` ${cell}: ${board[row][column]} |`;
            cell++;
        }
        console.log(rowOutput);
        console.log("\t ......................");
    }
}

export function getWinner(board) {
    let winner = '-'; // Inicialmente no hay ganador

    // Verificar las filas
    for (let row = 0; row < BOARD_SIZE; row++) {
        const first = board[row][0];
        if (first !== '-' && first !== ' ') {
            let allMatch = true;
            for (let column = 1; column < BOARD_SIZE; column++) {
                if (first !== board[row][column]) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) return first;
        }
    }

    // Verificar las columnas
    for (let column = 0; column < BOARD_SIZE; column++) {
        const first = board[0][column];
        if (first !== '-' && first !== ' ') {
            let allMatch = true;
            for (let i= 1; i < BOARD_SIZE; i++) {
                if (first !== board[i][i]) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) return first;
        }
    }

    // Verificar diagonal principal
    const firstDiagPrinc = board[0][0];
    if (firstDiagPrinc !== '-' && firstDiagPrinc !== ' ') {
        let allMatch = true;
        for (let i = 1; i < BOARD_SIZE; i++) {
            if (firstDiagPrinc !== board[i][i]) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) return firstDiagPrinc;
    }

    // Verificar diagonal secundaria
    const firstDiagSec = board[0][BOARD_SIZE - 1];
    if (firstDiagSec !== '-' && firstDiagSec !== ' ') {
        let allMatch = true;
        for (let i = 1; i < BOARD_SIZE; i++) {
            if (firstDiagSec !== board[i][BOARD_SIZE - 1 - i]) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) return firstDiagSec;
    }

    return winner; // si llego a este punto, no hay ganador, si no ya hubiese sido retornado
}

/* export function hasFreeCell(board) {
    return board.some(row => row.includes('-'));
}

export function minimax(board, depth, isMaximizing) {
    const winner = getWinner(board);
    if (winner === 'X') return 10 - depth;
    if (winner === 'O') return depth - 10;
    if (!hasFreeCell(board)) return 0;

    if (isMaximizing) {
        let maxEvaluation = -Infinity;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = 'X';
                    const evaluation = minimax(board, depth + 1, false);
                    board[i][j] = '-';
                    maxEvaluation = Math.max(maxEvaluation, evaluation);
                }
            }
        }
        return maxEvaluation;
    } else {
        let minEvaluation = Infinity;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === '-') {
                    board[i][j] = 'O';
                    const evaluation = minimax(board, depth + 1, true);
                    board[i][j] = '-';
                    minEvaluation = Math.min(minEvaluation, evaluation);
                }
            }
        }
        return minEvaluation;
    }
}

export function findBestMove(board) {
    let bestMove ;
    let bestValue = -Infinity;

    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
        const row = Math.floor(i / BOARD_SIZE);
        const col = i % BOARD_SIZE;
        if (board[row][col] === '-') {
            board[row][col] = 'O';
            const moveValue = minimax(board, 0, true);
            board[row][col] = '-';

            if (moveValue < bestValue) {
                bestMove = i;
                bestValue = moveValue;
            }
        }
    }
    return bestMove;
}
 */