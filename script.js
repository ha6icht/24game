const GAME_ID = document.getElementById('game');
const GAME_NUMBER_1 = 1;
const GAME_NUMBER_2 = 7;
const GAME_NUMBER_3 = 8;
const GAME_NUMBER_4 = 9;
const NUMBER_STRING_1 = GAME_NUMBER_1.toString();
const NUMBER_STRING_2 = GAME_NUMBER_2.toString();
const NUMBER_STRING_3 = GAME_NUMBER_3.toString();
const NUMBER_STRING_4 = GAME_NUMBER_4.toString();

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
const STRING_NUMBERS = NUMBER_STRING_1+NUMBER_STRING_2+NUMBER_STRING_3+NUMBER_STRING_4;
GAME_ID.innerHTML = solve24(STRING_NUMBERS);

console.log(solve24(STRING_NUMBERS));
console.log(solve24('6789'));
console.log(STRING_NUMBERS);