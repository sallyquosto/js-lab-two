const randomDamage = () => {
    return Math.floor((Math.random() * 10) + 1);
}

const chooseOption = (opt1, opt2) =>{
    const randNum = Math.round(Math.random)
    return randNum === 0 ? opt1 : opt2;
}

 const attackPlayer = function(health) {
     return health - randomDamage();
 }

 let player;
 let logHealth = (player, health) => {
     console.log(`${player} health: ${health}`);
 }

 let loser;
 let winner;
 let logDeath = (winner, loser) => {
     console.log(`${winner} defeated ${loser}`);
 }

 let isDead = false;
 isDead = (health) => {
     return(health<=0);
 }

 let player1;
 let player2;
 let player1Health;
 let player2Health;

 function fight(player1, player2, player1Health, player2Health) {
     while (true) {
         const attacker = chooseOption(player1, player2);
         if (attacker === player1) {
             player2Health = attackPlayer(player2Health);
             logHealth(player2, player2Health);
             if (isDead(player2Health)) {
                 logDeath(player1, player2);
                break; 
             }
         } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
         }
     }
 }

 fight('alex','sally', 50, 50);