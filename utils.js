function rectangularCollision({rectangle1, rectangle2}){
    return(
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= 
        rectangle2.position.x && 
    rectangle1.attackBox.position.x <= rectangle2.position.x + 
        rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= 
        rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + 
        rectangle2.height
    )
}

function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#displaytext').style.display = 'flex'
    if (player.health === enemy.health){
        document.querySelector('#displaytext').innerHTML = 'tie'
        }  else if (player.health > enemy.health) {
            document.querySelector('#displaytext').innerHTML = 'Player 1 Wins'
        }   else if (player.health < enemy.health) {
            document.querySelector('#displaytext').innerHTML = 'Player 2 Wins'
        }
}

let timer = 45
let timerId
function decreaseTimer(){
    if (timer > 0) {
   timerId =  setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timerjs').innerHTML = timer
    }
    if(timer === 0) {
        document.querySelector('#displaytext').style.display = 'flex'
        determineWinner({player,enemy, timerId})
    }
}