$(document).ready(function(){
$(`#all-container`).hide().fadeIn(1000);
  let player1Score = 0;
  let player2Score = 0;
  let tieScore = 0;

let audio = function(){         // Define audio
  let play = new Audio(`voice/bip.wav`);
  play.play();
}

let win = function(){
  let win = new Audio(`voice/win.wav`);
  win.play();
}

let lose = function(){
  let lose = new Audio(`voice/lose.wav`);
  lose.play();
}

let won = function(){
  player1Score= player1Score + 1;
  $(`.p1`).html( player1Score );
}

let lost = function(){
  player2Score= player2Score + 1;
  $(`.p2`).html( player2Score );
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
   $(`#box1, #box2, #box3`).addClass(`win-color`);
   result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b4 === `X` && b5 === `X` && b6 ===`X` ){
  $(`#box4, #box5, #box6`).addClass(`win-color`);
  result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b7 === `X` && b8 === `X` && b9 ===`X` ){
  $(`#box7, #box8, #box9`).addClass(`win-color`);
  result.text(`Player One Won Game`);
  won();
  disableBox();
  win();
}else if ( b1 === `X` && b4 === `X` && b7 ===`X`){
  $(`#box1, #box4, #box7`).addClass(`win-color`);
  result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b2 === `X` && b5 === `X` && b8 ===`X` ){
  $(`#box2, #box5, #box8`).addClass(`win-color`);
  result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b3 === `X` && b6 === `X` && b9 ===`X` ){
  $(`#box3, #box6, #box9`).addClass(`win-color`);
  result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b1 === `X` && b5 === `X` && b9 ===`X` ){
  $(`#box1, #box5, #box9`).addClass(`win-color`);
    result.text(`Player One Won Game`);
    won();
    disableBox();
    win();
}else if ( b3 === `X` && b5 === `X` && b7 ===`X` ){
  $(`#box3, #box5, #box7`).addClass(`win-color`);
  result.text(` Player One Won Game `);
    won();
    disableBox();
    win();
}
///////////////////////////////// O CONDITION ///////////////////////////////////////////////

if ( b1 === `O` && b2 === `O` && b3 ===`O` ){
  $(`#box1, #box2, #box3`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b4 === `O` && b5 === `O` && b6 ===`O` ){
  $(`#box4, #box5, #box6`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b7 === `O` && b8 === `O` && b9 ===`O` ){
  $(`#box7, #box8, #box9`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b1 === `O` && b4 === `O` && b7 ===`O` ){
  $(`#box1, #box4, #box7`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b2 === `O` && b5 === `O` && b8 ===`O` ){
  $(`#box2, #box5, #box8`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b3 === `O` && b6 === `O` && b9 ===`O` ){
  $(`#box3, #box6, #box9`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b1 === `O` && b5 === `O` && b9 ===`O` ){
  $(`#box1, #box5, #box9`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
}else if ( b3 === `O` && b5 === `O` && b7 ===`O` ){
  $(`#box3, #box5, #box7`).addClass(`win-color`);
  result.text(`Player Two Won Game`);
    lost();
    disableBox();
    win();
////////////////////////////////// TIE GAME ////////////////////////////////////////////////////////////////////////

}else if( (b1 ===  `X` || b1 ===`O`) && (b2 ===  `X` || b2 ===`O`) && (b3 ===  `X` || b3 ===`O`)
          && (b4 ===  `X` || b4 ===`O`) && (b5 ===  `X` || b5 ===`O`)
          && (b6 ===  `X` || b6 ===`O`) && (b7 ===  `X` || b7 ===`O`)
          && (b8 ===  `X` || b8 ===`O`) && (b9 ===  `X` || b9 ===`O`) ){
  result.text(`WOOT!! Its a Tie Game`);
  tieScore = tieScore + 1;
  $(`.p3`).html( tieScore );
    disableBox();
    lose();

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
  $(`#box1, #box2, #box3, #box4, #box5,
  #box6, #box7, #box8, #box9`).removeClass(`win-color`);
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
