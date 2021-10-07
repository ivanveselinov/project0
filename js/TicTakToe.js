$(document).ready(function(){
$(`#all-container`).hide().fadeIn(1000);
  let player1Score = 0;
  let player2Score = 0;
  let tieScore = 0;

let audio = function(){         // Define audio
  let play = new Audio(`voice/bip.wav`);
  play.play();
}


const main = function(){
console.log(`MAIN FUNCTION STARTED`);
let b1 = $(`#box1`).val();
let b2 = $(`#box2`).val();
let b3 = $(`#box3`).val();
let b4 = $(`#box4`).val();
let b5 = $(`#box5`).val();
let b6 = $(`#box6`).val();
let b7 = $(`#box7`).val();
let b8 = $(`#box8`).val();
let b9 = $(`#box9`).val();
let result = $(`#result`);

const disableBox = function(){
  $("input").prop('disabled', true); /// disable the input  ///
  console.log(`this is disabled`);
}


///////////////////////////////// X CONDITION //////////////////////////////////////////////////
  if ( b1 === `X` && b2 === `X` &&  b3 === `X`){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
  disableBox();
}else if ( b4 === `X` && b5 === `X` && b6 ===`X` ){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}else if ( b7 === `X` && b8 === `X` && b9 ===`X` ){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
  disableBox();
}else if ( b1 === `X` && b4 === `X` && b7 ===`X`){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}else if ( b2 === `X` && b5 === `X` && b8 ===`X` ){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}else if ( b3 === `X` && b6 === `X` && b9 ===`X` ){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}else if ( b1 === `X` && b5 === `X` && b9 ===`X` ){
  result.text(`Player One Won Game`);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}else if ( b3 === `X` && b5 === `X` && b7 ===`X` ){
  result.text(` Player One Won Game `);
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
    disableBox();
}


///////////////////////////////// O CONDITION ///////////////////////////////////////////////

if ( b1 === `O` && b2 === `O` && b3 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b4 === `O` && b5 === `O` && b6 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b7 === `O` && b8 === `O` && b9 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b1 === `O` && b4 === `O` && b7 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b2 === `O` && b5 === `O` && b8 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b3 === `O` && b6 === `O` && b9 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b1 === `O` && b5 === `O` && b9 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();
}else if ( b3 === `O` && b5 === `O` && b7 ===`O` ){
  result.text(`Player Two Won Game`);
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
    disableBox();

////////////////////////////////// TIE GAME ////////////////////////////////////////////////////////////////////////

}else if( (b1 ===  `X` || b1 ===`O`) && (b2 ===  `X` || b2 ===`O`) && (b3 ===  `X` || b3 ===`O`)
          && (b4 ===  `X` || b4 ===`O`) && (b5 ===  `X` || b5 ===`O`)
          && (b6 ===  `X` || b6 ===`O`) && (b7 ===  `X` || b7 ===`O`)
          && (b8 ===  `X` || b8 ===`O`) && (b9 ===  `X` || b9 ===`O`) ){
  result.text(`WOOT!! Its a Tie Game`);
  tieScore = tieScore + 1;
  $(`.p3`).html( tieScore );
    disableBox();

}else if( players.counter == 1 ){
  $(`#turn`).html(`Player X turn`);
}else{
  $(`#turn`).html(`Player O turn`);
}

} //END OF IF Y AND 0  FUNCTION

/////////////// RESTART BUTTON /////////////////////////////////////////////////

$(`#restart`).on(`click`, function(){
  $("input").prop('disabled', false);
  let b1 = $(`#box1`).val("");
  let b2 = $(`#box2`).val("");
  let b3 = $(`#box3`).val("");
  let b4 = $(`#box4`).val("");
  let b5 = $(`#box5`).val("");
  let b6 = $(`#box6`).val("");
  let b7 = $(`#box7`).val("");
  let b8 = $(`#box8`).val("");
  let b9 = $(`#box9`).val("");
  let result = $(`#result`).text("");
  let turn = $(`#turn`).html("");
  audio();
});

/////////////////////////////DEFINE PLAYERS/////////////////////////////////////

const players = {
playerX: `X`,
playerO: `O`,
counter: 1
}

///////////////////////// USER INTERFACE ON CLICK //////////////////////////////

const boxClick = function(){
  if( players.counter == 1 ){
    console.log(players.counter);
    $(`#${this.id}`).val(players.playerX);
    $(`#${this.id}`).prop(`disabled`, true);
    players.counter = 0;
  }else{
    $(`#${this.id}`).val(players.playerO);
    $(`#${this.id}`).prop(`disabled`, true);
    players.counter = 1;
  }
  audio();
  main();
}


$(`#box1`).on(`click`, boxClick);
$(`#box2`).on(`click`, boxClick);
$(`#box3`).on(`click`, boxClick);
$(`#box4`).on(`click`, boxClick);
$(`#box5`).on(`click`, boxClick);
$(`#box6`).on(`click`, boxClick);
$(`#box7`).on(`click`, boxClick);
$(`#box8`).on(`click`, boxClick);
$(`#box9`).on(`click`, boxClick);


});// END OF PROGRAM
