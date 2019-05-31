/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;

inIt();

document.querySelector('.btn-roll').addEventListener('click', function(){

    var dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('#current-' + activePlayer).textContent = dice;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    document.querySelector('#current-' + activePlayer).textContent
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice !==1){

        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{

        document.getElementById('score-' + activePlayer).textContent = 0;
        scores[activePlayer] = 0;
        nextPlayer();

    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('.dice').style.display = 'none';

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.start-new-game').style.display = 'block';
        document.querySelector('.btn-new').style.display = 'block';

    }else{
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', inIt);

function inIt(){
    scores = [0,0];
    roundScore = 0;
    activePlayer=0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'Player 1';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.start-new-game').style.display = 'none';

    document.querySelector('.btn-new').style.display = 'none';

}

function nextPlayer(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
}