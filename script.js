const BUTTON_GET_TWENTY_FOUR = document.getElementById('get-twenty-four');
const GAME_ID = document.getElementById('game');

// Constants of div tag declartion
const GAME_1 = document.getElementById('game-1');
const GAME_2 = document.getElementById('game-2');
const GAME_3 = document.getElementById('game-3');
const GAME_4 = document.getElementById('game-4');

GAME_1.focus();

let bool = true;

/*function compareNumbers (a,b){
  return a-b
}*/

//*** not Necessary!?!
/*async*/ /*function delay(ms){
  console.log("Wait starts...");
  console.log('delaying for ' + ms + ' ms');

  //*** async await not WORKING!
  //await new Promise(resolve => setTimeout(resolve, ms)); 

  //*** delay is WORKING with do ...while loop!
  const START = Date.now();
  let now;
  do{
    now = Date.now();
  }while (now - START < ms);
  console.log("...Wait ends");
}*/

/*function getTerm(numOfTerm, a, b, c, d){
  console.log("getTerm parameters: ",numOfTerm, a, b, c, d);
  let getTermStr = '';

  switch(numOfTerm){
    case 0:
      getTermStr = `(${a}+${b}+${c}+${d})`;
      break;
    case 1:
      //delay(1000);
      getTermStr = `(${a}*${b}*${c}*${d})`;
      console.log("case 1: ",getTermStr);
      break;
    case 2:
      getTermStr =  `(${b}-${c}/${d})*${a}`;
      break;
    case 3:
      getTermStr =  `(${a}*${c})/(${d}-${b})`;
      break;
    default:
      console.error("setTimeout working | numOfTerm: ", numOfTerm);
  }

  return getTermStr;
}*/

function solve24(numStr){
  const NUM_ARR = numStr !== undefined ? numStr.split(''):false;
  //const NUM_ARR = [6,9,8,7];
  console.log("solve24() NUM_ARR:",NUM_ARR);

  const MS = 4000;

  const PLUS_TERM = document.getElementById('plus-term');
  const PLUS_TERM_IS_TRUE = document.getElementById('plus-term-is-true');
  const TIMES_TERM = document.getElementById('times-term');
  const TIMES_TERM_IS_TRUE = document.getElementById('times-term-is-true');
  const FACTORIAL_TERM = document.getElementById('factorial-term');
  const FACTORIAL_TERM_IS_TRUE = document.getElementById('factorial-term-is-true');
  const DISTRIBUTIVE_TERM = document.getElementById('distributive-term');
  const DISTRIBUTIVE_TERM_IS_TRUE = document.getElementById('distributive-term-is-true');

  let toSort = [];
  //let termStr = '';
  //let bool = false;
  let countFalse = 0;
  
  if(NUM_ARR.length === 4){
    toSort = NUM_ARR.map((element,index,array)=>{
      return array[index] = parseInt(element);
    });
    //console.log(NUM_ARR);

    //*** Is sort necessary? ****
    toSort.sort((a,b) => a-b);
    //console.log("sorted Array (toSort): ",toSort);

    const a = toSort[0];
    const b = toSort[1];
    const c = toSort[2];
    const d = toSort[3];
    //**************************x+-y**i.e. '2598
    console.log('2598');
    if((a+b+c+d) === 24){
      //delay(2000);
      //termStr = getTerm(0,a,b,c,d);
      //setTimeout(1000);
      //PLUS_TERM.style.display = 'table-row';
      //delay(1000);
      PLUS_TERM_IS_TRUE.innerHTML = 'true';
      PLUS_TERM_IS_TRUE.style.color = 'green';
      PLUS_TERM_IS_TRUE.style.animationIterationCount = '0';
    }
    else{
      //PLUS_TERM.style.display = 'table-row';
      //delay(1000);
      PLUS_TERM_IS_TRUE.innerHTML = 'false';
      PLUS_TERM_IS_TRUE.style.color = 'red';
      PLUS_TERM_IS_TRUE.style.animationIterationCount = '0';
      //delay(2000);
      setTimeout(()=>PLUS_TERM.style.display = 'none',MS);
      countFalse++;
      
    }
    //**************************x*/y**i.e. '1234'
    console.log('1234');
    if((a*b*c*d) === 24){
      //delay(1000);
      //termStr = getTerm(1,a,b,c,d);
      //setTimeout(1000);
      //TIMES_TERM.style.display = 'table-row';
      //delay(1000);
      TIMES_TERM_IS_TRUE.innerHTML = 'true';
      TIMES_TERM_IS_TRUE.style.color = 'green';
      TIMES_TERM_IS_TRUE.style.animationIterationCount = '0';
    }
    else{
      //TIMES_TERM.style.display = 'table-row';
      //delay(1000);
      TIMES_TERM_IS_TRUE.innerHTML = 'false';
      TIMES_TERM_IS_TRUE.style.color = 'red';
      TIMES_TERM_IS_TRUE.style.animationIterationCount = '0';
      //delay(2000);
      setTimeout(()=>TIMES_TERM.style.display = 'none', MS);
      countFalse++;
    }
    //**************************(x/y)*z**i.e. '4788'
    console.log('4788');
    if(((b-c/d)*a) === 24){
      //delay(2000);
      //termStr = getTerm(2,a,b,c,d);
      //setTimeout(1000);
      //FACTORIAL_TERM.style.display = 'table-row';
      //delay(1000);
      FACTORIAL_TERM_IS_TRUE.innerHTML = 'true';
      FACTORIAL_TERM_IS_TRUE.style.color = 'green';
      FACTORIAL_TERM_IS_TRUE.style.animationIterationCount = '0';
    }
    else{
      //FACTORIAL_TERM.style.display = 'table-row';
      //delay(1000);
      FACTORIAL_TERM_IS_TRUE.innerHTML = 'false';
      FACTORIAL_TERM_IS_TRUE.style.color = 'red';
      FACTORIAL_TERM_IS_TRUE.style.animationIterationCount = '0';
      //delay(2000);
      setTimeout(()=>FACTORIAL_TERM.style.display = 'none',MS);
      countFalse++;
    }
    //**************************(a*c)/(d-b)**i.e. '6789
    console.log('6789');
    if(((a*c)/(d-b)) === 24){
      //delay(2000);
      //termStr = getTerm(3,a,b,c,d);
      //setTimeout(1000);
      //DISTRIBUTIVE_TERM.style.display = 'table-row';
      //delay(1000);
      DISTRIBUTIVE_TERM_IS_TRUE.innerHTML = 'true';
      DISTRIBUTIVE_TERM_IS_TRUE.style.color = 'green';
      DISTRIBUTIVE_TERM_IS_TRUE.style.animationIterationCount = '0';
    }
    else{
      //DISTRIBUTIVE_TERM.style.display = 'table-row';
      //delay(1000);
      DISTRIBUTIVE_TERM_IS_TRUE.innerHTML = 'false';
      DISTRIBUTIVE_TERM_IS_TRUE.style.color = 'red';
      DISTRIBUTIVE_TERM_IS_TRUE.style.animationIterationCount = '0';
      //delay(2000);
      setTimeout(()=>DISTRIBUTIVE_TERM.style.display = 'none',MS);
      countFalse++;
    }
    /*else{
      //termStr = false;
      console.log("Not enough numbers! output NUM_ARR:", NUM_ARR);
    }*/
  } else {
    //termStr = false;
    console.log("Not enough numbers! output NUM_ARR:", NUM_ARR);
  }

  //setTimeout(() => console.log("setTimeout: ",termStr),1000);
  //console.log("case 1: ",termStr);
  //return termStr;
  //return true;
  bool = false;
  //setTimeout(() => location.reload(),10000)
  setTimeout(()=>countFalse === 4? GAME_ID.innerHTML = 'You Lose!': GAME_ID.innerHTML = 'You Win!', 4000);
  BUTTON_GET_TWENTY_FOUR.innerHTML = "Refresh";
}

function getNumberTerm(){
  //*** Delay time of function solve24() call
  //const MS = 1000;

  // Constants of div tag declartion
  //const GAME_1 = document.getElementById('game-1');
  //const GAME_2 = document.getElementById('game-2');
  //const GAME_3 = document.getElementById('game-3');
  //const GAME_4 = document.getElementById('game-4');
  
  // Constants of instatiation of text between tags
  const GAME_1_NUMBER_STRING = GAME_1.innerHTML;
  const GAME_2_NUMBER_STRING = GAME_2.innerHTML;
  const GAME_3_NUMBER_STRING = GAME_3.innerHTML;
  const GAME_4_NUMBER_STRING = GAME_4.innerHTML;

  //const GAME_1_NUMBER = 1;
  //const GAME_2_NUMBER = 7;
  //const GAME_3_NUMBER = 8;
  //const GAME_4_NUMBER = 9;

  //const GAME_1_NUMBER = parseInt(GAME_1_NUMBER_STRING);
  //const GAME_2_NUMBER = parseInt(GAME_2_NUMBER_STRING);
  //const GAME_3_NUMBER = parseInt(GAME_3_NUMBER_STRING);
  //const GAME_4_NUMBER = parseInt(GAME_4_NUMBER_STRING);

  const REGEX_ONE_DIGIT = /[0-9]$/g;

  const GAME_1_BOOL = GAME_1_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true : false;
  const GAME_2_BOOL = GAME_2_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;
  const GAME_3_BOOL = GAME_3_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;
  const GAME_4_BOOL = GAME_4_NUMBER_STRING.match(REGEX_ONE_DIGIT)? true:false;

  //console.log(GAME_1_BOOL);

  const NUMBER_STRING_1 = GAME_1_BOOL ? GAME_1_NUMBER_STRING:false;
  const NUMBER_STRING_2 = GAME_2_BOOL ? GAME_2_NUMBER_STRING:false;
  const NUMBER_STRING_3 = GAME_3_BOOL ? GAME_3_NUMBER_STRING:false;
  const NUMBER_STRING_4 = GAME_4_BOOL ? GAME_4_NUMBER_STRING:false;

  const STRING_NUMBERS = (NUMBER_STRING_1 && NUMBER_STRING_1.length === 1 && NUMBER_STRING_2 && NUMBER_STRING_2.length === 1 && NUMBER_STRING_3 && NUMBER_STRING_3.length === 1 && NUMBER_STRING_4 && NUMBER_STRING_4.length === 1)?NUMBER_STRING_1+NUMBER_STRING_2+NUMBER_STRING_3+NUMBER_STRING_4:false;

  STRING_NUMBERS !== false?solve24(STRING_NUMBERS):location.reload(alert('Not enough digits! (It must have for digits!!) || NaN!'));
}

function getReload(){
  bool = true;
  location.reload();
  //GAME_1.focus();
}

GAME_1.addEventListener('keyup', () => {
  GAME_1.setAttribute('contenteditable', 'false');
  GAME_2.focus();
});
GAME_2.addEventListener('keyup', () => {
  GAME_2.setAttribute('contenteditable', 'false');
  GAME_3.focus();
});
GAME_3.addEventListener('keyup', () => {
  GAME_3.setAttribute('contenteditable', 'false');
  GAME_4.focus();
});
GAME_4.addEventListener('keyup', () => {
  GAME_4.setAttribute('contenteditable', 'false');
  BUTTON_GET_TWENTY_FOUR.focus();
});

//BUTTON_GET_TWENTY_FOUR.addEventListener('click', getNumberTerm);
BUTTON_GET_TWENTY_FOUR.addEventListener('click', () => {
  bool?getNumberTerm():getReload();
});
/*BUTTON_GET_TWENTY_FOUR.addEventListener( "click", (e) => {
  getNumberTerm();
});*/

// console.log(solve24('6789'));
//BUTTON_GET_TWENTY_FOUR.addEventListener('click', getNumberTerm);

/*BUTTON_GET_TWENTY_FOUR.addEventListener( "click", (e) => {
  getNumberTerm();
});*/

// console.log(solve24('6789'));
                                        
