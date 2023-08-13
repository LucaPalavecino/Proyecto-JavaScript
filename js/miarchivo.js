

  // Función para jugar una ronda del juego

let confirmation = window.confirm("¿quieres conenzar a jugar?");

    if (confirmation = true) {
      alert ("COMENCEMOS")
    }

//En esta función es para obtener un número aleatorio entre 1 y 12
function getRandomCard() {
  return Math.floor(Math.random() * 12) + 1;
}


function playRound() {
    const player1Card = getRandomCard();
    const player2Card = getRandomCard();
    let winner = "";

    if (player1Card > player2Card) {
    winner = "¡Jugador 1 gana la ronda!";
    } else if (player2Card > player1Card) {
    winner = "¡Jugador 2 gana la ronda!";
    } else {
    winner = "Es un empate en esta ronda.";
    }

    console.log(`Jugador 1 obtuvo la carta: ${player1Card}`);
    console.log(`Jugador 2 obtuvo la carta: ${player2Card}`);
    console.log(winner);
}

  // Jugar rondas hasta que el usuario decida detenerse
let playAgain = true;

while (playAgain) {
    console.log("Nueva Ronda:");
    playRound();
    
    const userInput = prompt("¿Quieres jugar otra ronda? (s/n)").toLowerCase();
    playAgain = userInput === "s";
}






























    // let validUsers = [
    //     { username: "luca", password: "patitasdepescado" },
    //     { username: "usuario2", password: "contraseña2" },
        
    // ];

    // let isLoggedIn = false;

    // for (let i = 0; i < validUsers.length; i++) {
    //     if (username === validUsers[i].username && password === validUsers[i].password) {
    //         isLoggedIn = true;
    //         break;
    //     }
    // }

    // if (isLoggedIn) {
    //     document.getElementById("message").textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
    // } else {
    //     document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    // }

    


