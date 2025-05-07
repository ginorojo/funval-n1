const board= document.getElementById("board");
const cells= document.querySelectorAll(".cell");
const turnoSpan = document.getElementById("turno");
const resetBtn = document.getElementById("reset");

let currentPlayer ="X";
let gameState = Array(9).fill(null);

const winningCombos =[
    [0,1,2], [3,4,5], [6,7,8], // filas
    [0,3,6], [1,4,7], [2,5,8], // columnas
    [0,4,8], [2,4,6]  // diagonales
];

//funcion para hacer click en una celda

function handleClick(e) {
    const cell =e.currentTarget;
    const index= cell.dataset.index;

    if (gameState[index] || checkWinner()) return

    gameState[index] = currentPlayer;
    renderSymbol(cell, currentPlayer);

    if (checkWinner()){

        setTimeout(()=> alert(`${currentPlayer} ha ganado`), 100);
    }

    else if (gameState.every(cell => cell)){
        setTimeout(() => alert ("!Empate"), 100)
    }

    else{
        currentPlayer = currentPlayer === "X" ? "0" : "X"
        turnoSpan.textContent = currentPlayer;
        turnoSpan.className = currentPlayer === "X" ? "text-[#F2B237]" : "text-[#31C4BE]";
    }
}
function renderSymbol(cell, player) {
    const svgX = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#31C4BE" viewBox="0 0 24 24">
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 
        4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
      </svg>`;
    const svgO = `
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F2B237" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 
        10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 
        18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 
        8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 
        8.001-8.001 8.001z"/>
      </svg>`;
    cell.innerHTML = player === "X" ? svgX : svgO;
  }

function checkWinner(){
    return winningCombos.some(combo => {
        const [a ,b ,c] = combo;
        return(
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]

        );
    });
}
  // Función para reiniciar el juego11

  function resetGame() {
    gameState = Array(9).fill(null);       // Limpiar tablero
    currentPlayer = "X";                   // Reiniciar jugador
    turnoSpan.textContent = currentPlayer; // Actualizar texto
    turnoSpan.className = "text-[#F2B237]"; // Color para X
    cells.forEach(cell => cell.innerHTML = ""); // Limpiar celdas
  }

  // Agregar evento a cada celda: al hacer clic, ejecuta handleClick
  cells.forEach(cell => cell.addEventListener("click", handleClick));

  // Evento para el botón de reinicio
  resetBtn.addEventListener("click", resetGame);