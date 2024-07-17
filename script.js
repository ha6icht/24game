const BUTTON_GET_TWENTY_FOUR = document.getElementById('get-twenty-four');
const GAME_ID = document.getElementById('game');

function solve24(numStr){
  const numArr = numStr.slice('');
  const a = parseInt(numArr[0]);
  const b = parseInt(numArr[1]);
  const c = parseInt(numArr[2]);
  const d = parseInt(numArr[3]);
  let termStr = '';
  let bool = false;

  //**************************x+-y**i.e. '2598'
  if((a+b+c+d) === 24) termStr = `${a}+${b}+${c}+${d}`;
  //**************************x*/y**i.e. '1234'
  else if((a*b*c*d) === 24) termStr = `${a}*${b}*${c}*${d}`;
  //**************************(x/y)*z**i.e. '4878'
  else if(((c-b/d)*a) === 24) termStr = `(${c}-${b}/${d})*${a}`;
  //**************************(a*c)/(d-b)**i.e. '6789
  else if(((a*c)/(d-b)) === 24) termStr = `(${a}*${c})/(${d}-${b})`;
  else return bool;

  return termStr;
  //return true;
}

function getNumberTerm(){
  
  const GAME_1 = document.getElementById('game-1');
  const GAME_2 = document.getElementById('game-2');
  const GAME_3 = document.getElementById('game-3');
  const GAME_4 = document.getElementById('game-4');
  
  const GAME_1_NUMBER_STRING = GAME_1.innerHTML;
  const GAME_2_NUMBER_STRING = GAME_2.innerHTML;
  const GAME_3_NUMBER_STRING = GAME_3.innerHTML;
  const GAME_4_NUMBER_STRING = GAME_4.innerHTML;
  //const GAME_1_NUMBER = 1;
  //const GAME_2_NUMBER = 7;
  //const GAME_3_NUMBER = 8;
  //const GAME_4_NUMBER = 9;

  const GAME_1_NUMBER = parseInt(GAME_1_NUMBER_STRING);
  const GAME_2_NUMBER = parseInt(GAME_2_NUMBER_STRING);
  const GAME_3_NUMBER = parseInt(GAME_3_NUMBER_STRING);
  const GAME_4_NUMBER = parseInt(GAME_4_NUMBER_STRING);

  const REGEX_ONE_DIGIT = /[0-9]$/g;

  const GAME_1_BOOL = GAME_1_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true : false;
  const GAME_2_BOOL = GAME_2_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;
  const GAME_3_BOOL = GAME_3_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;
  const GAME_4_BOOL = GAME_4_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;

  console.log(GAME_1_BOOL);

  const NUMBER_STRING_1 = GAME_1_BOOL ? GAME_1_NUMBER_STRING:false;
  const NUMBER_STRING_2 = GAME_2_BOOL ? GAME_2_NUMBER_STRING:false;
  const NUMBER_STRING_3 = GAME_3_BOOL ? GAME_3_NUMBER_STRING:false;
  const NUMBER_STRING_4 = GAME_4_BOOL ? GAME_4_NUMBER_STRING:false;

  const STRING_NUMBERS = (NUMBER_STRING_1.length === 1 && NUMBER_STRING_1 && NUMBER_STRING_2 && NUMBER_STRING_2.length === 1 && NUMBER_STRING_3 && NUMBER_STRING_3.length === 1 && NUMBER_STRING_4 && NUMBER_STRING_4.length === 1)?NUMBER_STRING_1+NUMBER_STRING_2+NUMBER_STRING_3+NUMBER_STRING_4:alert("NaN and Number should have only one digit!");
  //return STRING_NUMBERS;
  GAME_ID.innerHTML = solve24(STRING_NUMBERS);

  console.log(solve24(STRING_NUMBERS));
  console.log(STRING_NUMBERS);
}

BUTTON_GET_TWENTY_FOUR.addEventListener( "click", (e) => {
  getNumberTerm();
});

console.log(solve24('6789'));
                                        
