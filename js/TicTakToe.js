$(document).ready(function(){

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
  $(`#box1`).disable = true;
  $(`#box2`).disable = true;
  $(`#box3`).disable = true;
  $(`#box4`).disable = true;
  $(`#box5`).disable = true;
  $(`#box6`).disable = true;
  $(`#box7`).disable = true;
  $(`#box8`).disable = true;
  $(`#box9`).disable = true;
}

///////////////////////////////// X CONDITION ///////////////////////////////////////////////
  if ( (b1 === `x` || b1 === `X`) && (b2 === `x` || b2 === `X`) &&  (b3 === `x` || b3 === `X`)){
  result.text(`Player One Won Game`);
  disableBox();
}else if ( (b4 === `x` || b4 === `X`) && (b5 === `x` || b5 === `X`) && (b6 ===`x` || b6 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();
}else if ( (b7 === `x` || b7 === `X`) && (b8 === `x` || b8 === `X`) && (b9 ===`x` || b9 ===`X`) ){
  result.text(`Player One Won Game`);
  disableBox();
}else if ( (b1 === `x` || b1 === `X`) && (b4 === `x` || b4 === `X`) && (b7 ===`x` || b7 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();
}else if ( (b2 === `x` || b2 === `X`) && (b5 === `x` || b5 === `X`) && (b8 ===`x` || b8 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();
}else if ( (b3 === `x` || b3 === `X`) && (b6 === `x` || b6 === `X`) && (b9 ===`x` || b9 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();  disableBox();
}else if ( (b1 === `x` || b1 === `X`) && (b5 === `x` || b5 === `X`) && (b9 ===`x` || b9 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();
}else if ( (b3 === `x` || b3 === `X`) && (b5 === `x` || b5 === `X`) && (b7 ===`x` || b7 ===`X`) ){
  result.text(`Player One Won Game`);
    disableBox();
}


///////////////////////////////// Y CONDITION ///////////////////////////////////////////////

if ( (b1 === `o` || b1 === `O`) && (b2 === `o` || b2 === `O`) && (b3 ===`o` || b3 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b4 === `o` || b4 === `O`) && (b5 === `o` || b5 === `O`) && (b6 ===`o` || b6 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b7 === `o` || b7 === `O`) && (b8 === `o` || b8 === `O`) && (b9 ===`o` || b9 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b1 === `o` || b1 === `O`) && (b4 === `o` || b4 === `O`) && (b7 ===`o` || b7 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b2 === `o` || b2 === `O`) && (b5 === `o` || b5 === `O`) && (b8 ===`o` || b8 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b3 === `o` || b3 === `O`) && (b6 === `o` || b6 === `O`) && (b9 ===`o` || b9 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b1 === `o` || b1 === `O`) && (b5 === `o` || b5 === `O`) && (b9 ===`o` || b9 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();
}else if ( (b3 === `o` || b3 === `O`) && (b5 === `o` || b5 === `O`) && (b7 ===`o` || b7 ===`O`) ){
  result.text(`Player Two Won Game`);
    disableBox();

////////////////////////////////// TIE GAME ////////////////////////////////////////////////////////////////////////

}else if( (b1 ===  `X` || b1 ===`O`) && (b2 ===  `X` || b2 ===`O`) && (b3 ===  `X` || b3 ===`O`)
          && (b4 ===  `X` || b4 ===`O`) && (b5 ===  `X` || b5 ===`O`)
          && (b6 ===  `X` || b6 ===`O`) && (b7 ===  `X` || b7 ===`O`)
          && (b8 ===  `X` || b8 ===`O`) && (b9 ===  `X` || b9 ===`O`) ){
  result.text(`WOOT!! Its a Tie Game`);
    disableBox();

}else if( players.counter == 1 ){
  $(`#turn`).html(`Player X turn`);
}else{
  $(`#turn`).html(`Player O turn`);
}

} //END OF IF Y AND 0  FUNCTION

/////////////// RESTART BUTTON /////////////////////////////////////////////////

$(`#restart`).on(`click`, function(){
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
    $(`#${this.id}`).disabled = true;
    players.counter = 0;
  }else{
    $(`#${this.id}`).val(players.playerO);
    $(`#${this.id}`).disabled = true;
    players.counter = 1;
  }
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

//////////////// OTHER WAY WORKING TOO !! //////////////////////////////////////

// $(`#box1`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box1`).val(players.playerX);
//     $(`#box1`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box1`).val(players.playerO);
//     $(`#box1`).disabled = true;
//     player.counter = 1;
//   }
//   main();
// });
//
// $(`#box2`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box2`).val(players.playerX);
//     $(`#box2`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box2`).val(players.playerO);
//     $(`#box2`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box3`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box3`).val(players.playerX);
//     $(`#box3`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box3`).val(players.playerO);
//     $(`#box3`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box4`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box4`).val(players.playerX);
//     $(`#box4`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box4`).val(players.playerO);
//     $(`#box4`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box5`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box5`).val(players.playerX);
//     $(`#box5`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box5`).val(players.playerO);
//     $(`#box5`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box6`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box6`).val(players.playerX);
//     $(`#box6`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box6`).val(players.playerO);
//     $(`#box6`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box7`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box7`).val(players.playerX);
//     $(`#box7`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box7`).val(players.playerO);
//     $(`#box7`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box8`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box8`).val(players.playerX);
//     $(`#box8`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box8`).val(players.playerO);
//     $(`#box8`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
// $(`#box9`).on(`click`, function(){
//   if( players.counter == 1 ){
//     $(`#box9`).val(players.playerX);
//     $(`#box9`).disabled = true;
//     players.counter = 0;
//   }else{
//     $(`#box9`).val(players.playerO);
//     $(`#box9`).disabled = true;
//     players.counter = 1;
//   }
//   main();
// });
//
//
});// END OF PROGRAM
