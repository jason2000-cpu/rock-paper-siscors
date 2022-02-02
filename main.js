let compSelection ='';
let playerSelection = '';
let compScore = 0;
let playerScore = 0;

document.getElementById("rock").addEventListener('click', function rock() {
    playerSelection = 'rock';
    console.log('rock')
    computerPlay()
    player(compSelection, playerSelection)
})
document.getElementById("paper").addEventListener('click',  function paper() {
    playerSelection = 'paper';
    console.log('paper')
    computerPlay()
    player(compSelection, playerSelection)
})
document.getElementById("siscors").addEventListener('click', function siscors() {
    playerSelection = 'siscors';
    console.log('siscors')
    computerPlay();
    player(compSelection, playerSelection)
})

function computerPlay(){
    let  selection = ['rock', 'paper', 'siscors'];
    //console.log(selection[Math.floor(Math.random() * 3)])
    compSelection = selection[Math.floor(Math.random() * 3)]
    return  compSelection;
}



computerPlay();
console.log(`The computer choice is ${compSelection}`)

function player(compSelection, playerSelection){
    playerSelect = playerSelection.toLowerCase();
    if(compSelection === 'rock' && playerSelect == 'paper'){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect}  and  computer choice was ${compSelection}\nThe omputer Wins!!`;
        console.log('The computer Wins!!');
        compScore+1;
        return 'The computer Wins!!';
    }else if (compSelection == 'rock' && playerSelect == 'siscors'){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect} \n You win`;
        //document.body.appendChild(h1);
        //console.log("You win");
        playerScore +1;
        return 'You win';
    }else if(compSelection == playerSelect){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect} and  computer choice was ${compSelection} \n  its a tie`;
        //document.body.appendChild(h1);
        //console.log(`Your choice was ${playerSelect} \n  its a tie`);
        return 'Its a tie';
    }else if( compSelection == 'paper' && playerSelect === 'rock'){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect}  and  computer choice was ${compSelection} \n  computer Wins!!`;
       // document.body.appendChild(h1);
        //console.log(`Your choice was ${playerSelect} \n The computer Wins!!`);
        compScore+1;
        return 'The computer Wins!!';
    }else if (compSelection == ' paper' && playerSelect == ' siscors'){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect}  and  computer choice was ${compSelection} \n You win`;
        //document.body.appendChild(h1);
        //console.log(`Your choice was ${playerSelect} \n You win`);
        playerScore+1;
        return 'You win';
    }else if (compSelection == ' siscors' && playerSelect == 'rock'){
        const status = document.getElementById("status");
        status.innerText = `Your choice was ${playerSelect}  and  computer choice was ${compSelection} \n The computer Wins!!`;
        document.body.appendChild(h1);
        //console.log(`Your choice was ${playerSelect} \n The computer Wins!!`);
        compScore+1;
        return 'The computer Wins!!';
    }else if (compSelection == 'siscors' && playerSelect == 'paper'){
        const status = document.getElementById("staus");
        status.innerText = `Your choice was ${playerSelect}   and  computer choice was ${compSelection}\n You win`;
       // document.body.appendChild(h1);
        //console.log(`Your choice was ${playerSelect} \n You win`);
        playerScore+1;
        return 'You win';
    }else{
        return 'Invalid selection!!'
    }
       

}

document.getElementById('compScore').innerText = `Computer Score : ${compScore}`;
document.getElementById('playerScore').innerText = `Player Score : ${playerScore}`
