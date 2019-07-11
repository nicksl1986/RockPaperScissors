const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreboard = {
    player : 0,
    computer : 0
}

// Play Game : 
function play(e)
{
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id 
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)

    showWinner(winner, computerChoice)
}

// Get Computer's Choice : 
function getComputerChoice()
{
    const rand = Math.random()

    if(rand < 0.34)
    {
        return 'rock'
    }
    else if(rand <= 0.67)
    {
        return 'paper'
    }
    else 
    {
        return 'scissors'
    }
}

// Get Game Winner
function getWinner(p, c)
{
    if(p == c)
    {
        return 'draw'
    }
    else if(p == 'rock')
    {
        if(c == 'paper')
        {
            return 'computer'
        }
        else 
        {
            return 'player'
        }
    }
    else if(p == 'paper')
    {
        if(c == 'scissors')
        {
            return 'computer'
        }
        else 
        {
            return 'player'
        }
    }
    else if(p == 'scissors')
    {
        if(c == 'rock')
        {
            return 'computer'
        }
        else 
        {
            return 'player'
        }
    }
}

function showWinner(winner, computerChoice)
{
    if(winner == 'player')
    {
        // Increment Player Score : 
        scoreboard.player++

        // Show Modal Result : 
        result.innerHTML = `
        <h1 class="text-win">You Won !</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose&nbsp<strong>${computerChoice}</strong></p>
        `
    }
    else if(winner == 'computer')
    {
        // Increment Player Score : 
        scoreboard.computer++

        // Show Modal Result : 
        result.innerHTML = `
        <h1 class="text-win">You Lost !</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose&nbsp<strong>${computerChoice}</strong></p>
        `
    }
    else 
    {
    
        // Show Modal Result : 
        result.innerHTML = `
        <h1 class="text-win">It's a Draw !</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose<strong>${computerChoice}</strong></p>
        `
    }

    // Show the Score : 
    score.innerHTML = `
    <p>Player : ${scoreboard.player}</p>
    <p>Computer : ${scoreboard.computer}</p>
    `
    modal.style.display = 'block'

}

// Restart Game : 
function restartGame()
{
    scoreboard.player = 0
    scoreboard.computer = 0
    score.innerHTML = `
    <p>Player : 0</p>
    <p>Computer : 0</p>
    `
}

// Clear the Modal : 
function clearModal(e)
{
    if(e.target == modal)
    {
        modal.style.display = 'none'
    }
}

// Event Listeners : 
choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)