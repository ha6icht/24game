const BUTTON_GET_TWENTY_FOUR = document.getElementById('get-twenty-four');
const GAME_ID = document.getElementById('game');

function compareNumbers (a,b){
  return a-b
}

//*** not Necessary!!
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

function getTerm(numOfTerm, a, b, c, d){
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
}

function solve24(numStr){
  const NUM_ARR = numStr !== undefined ? numStr.split(''):false;
  //const NUM_ARR = [6,9,8,7];
  console.log("solve24() NUM_ARR:",NUM_ARR);

  let toSort = [];
  let termStr = '';
  //let bool = false;
  
  if(NUM_ARR.length === 4){
    toSort = NUM_ARR.map((element,index,array)=>{
      return array[index] = parseInt(element);
    });
    //console.log(NUM_ARR);

    //*** Is sort necessary? ****
    toSort.sort((a,b) => a-b);
    console.log("sorted Array (toSort): ",toSort);

    const a = toSort[0];
    const b = toSort[1];
    const c = toSort[2];
    const d = toSort[3];
    //**************************x+-y**i.e. '2598'
    if((a+b+c+d) === 24){
      //delay(2000);
      termStr = getTerm(0,a,b,c,d);
      //setTimeout(1000);
    }
    //**************************x*/y**i.e. '1234'
    else if((a*b*c*d) === 24){
      //delay(2000);
      termStr = getTerm(1,a,b,c,d);
      //setTimeout(1000);
    }
    //**************************(x/y)*z**i.e. '4788'
    else if(((b-c/d)*a) === 24){
      //delay(2000);
      termStr = getTerm(2,a,b,c,d);
      //setTimeout(1000);
    }
    //**************************(a*c)/(d-b)**i.e. '6789
    else if(((a*c)/(d-b)) === 24){
      //delay(2000);
      termStr = getTerm(3,a,b,c,d);
      //setTimeout(1000);
    }
    else termStr = false;
  } else {
    termStr = false;
    console.log("Not enough numbers! output NUM_ARR:", NUM_ARR);
  }

  //setTimeout(() => console.log("setTimeout: ",termStr),1000);
  //console.log("case 1: ",termStr);
  return termStr;
  //return true;
}

function getNumberTerm(){
  // Delay time of function solve24() call
  const MS = 1000;

  // Constants of div tag declartion
  const GAME_1 = document.getElementById('game-1');
  const GAME_2 = document.getElementById('game-2');
  const GAME_3 = document.getElementById('game-3');
  const GAME_4 = document.getElementById('game-4');

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

  const STRING_NUMBERS = (NUMBER_STRING_1 && NUMBER_STRING_1.length === 1 && NUMBER_STRING_2 && NUMBER_STRING_2.length === 1 && NUMBER_STRING_3 && NUMBER_STRING_3.length === 1 && NUMBER_STRING_4 && NUMBER_STRING_4.length === 1)?NUMBER_STRING_1+NUMBER_STRING_2+NUMBER_STRING_3+NUMBER_STRING_4:alert("NaN! Numbers only one digit!");
  //return STRING_NUMBERS;
  //delay(1000);
  GAME_ID.innerHTML = '';
  //delay(1000);
  console.log("Wait starts...");
  console.log('delaying for ' + MS + ' ms');
  setTimeout(() => GAME_ID.innerHTML = solve24(STRING_NUMBERS), MS);
  console.log("...Wait ends");
  //console.log(solve24(STRING_NUMBERS));
  //console.log(STRING_NUMBERS);
}
BUTTON_GET_TWENTY_FOUR.addEventListener('click', getNumberTerm);
/*BUTTON_GET_TWENTY_FOUR.addEventListener( "click", (e) => {
  getNumberTerm();
});*/

// console.log(solve24('6789'));
                                        
