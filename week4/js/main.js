//? 결과 스크린
const resultScreen=document.querySelector('.calculator-result');
const opsScreen=document.querySelector('.calculator-operations');

//? numbers
const num0Btn=document.querySelector('#num0');
const num1Btn=document.querySelector('#num1');
const num2Btn=document.querySelector('#num2');
const num3Btn=document.querySelector('#num3');
const num4Btn=document.querySelector('#num4');
const num5Btn=document.querySelector('#num5');
const num6Btn=document.querySelector('#num6');
const num7Btn=document.querySelector('#num7');
const num8Btn=document.querySelector('#num8');
const num9Btn=document.querySelector('#num9');

//? 특수 버튼
const resetBtn=document.querySelector('#reset');
const resultBtn=document.querySelector('#result');
const dotBtn=document.querySelector('#dot');
const divBtn=document.querySelector('#div');
const mulBtn=document.querySelector('#mul');
const minusBtn=document.querySelector('#minus');
const plusBtn=document.querySelector('#plus');
const delBtn=document.querySelector('#del');

//? 결과 값 저장
let curResult=0;

//? 커서 반짝임
// function screenLight(){
//   let isCalculating=true;

//   if(resultScreen.textContent.length > 0){
//     setInterval(() => {
//       if(isCalculating){
//         resultScreen.style.border="2px solid lightgreen";
//       }else{
//         resultScreen.style.border="2px solid transparent";
//       }
//       isCalculating=!isCalculating;
//     }, 500);
//   }
// }

//* 계산 초기화버튼
resetBtn.addEventListener('click',()=>{
  resultScreen.textContent='';
  opsScreen.textContent='';
});

//* 숫자 입력
num0Btn.addEventListener('click',()=>{
  resultScreen.textContent+="0"
  opsScreen.textContent+="0"
});
num1Btn.addEventListener('click',()=>{
  resultScreen.textContent+="1"
  opsScreen.textContent+="1"
});
num2Btn.addEventListener('click',()=>{
  resultScreen.textContent+="2"
  opsScreen.textContent+="2"
});
num3Btn.addEventListener('click',()=>{
  resultScreen.textContent+="3"
  opsScreen.textContent+="3"
});
num4Btn.addEventListener('click',()=>{
  resultScreen.textContent+="4"
  opsScreen.textContent+="4"
});
num5Btn.addEventListener('click',()=>{
  resultScreen.textContent+="5"
  opsScreen.textContent+="5"
});
num6Btn.addEventListener('click',()=>{
  resultScreen.textContent+="6"
  opsScreen.textContent+="6"
});
num7Btn.addEventListener('click',()=>{
  resultScreen.textContent+="7"
  opsScreen.textContent+="7"
});
num8Btn.addEventListener('click',()=>{
  resultScreen.textContent+="8"
  opsScreen.textContent+="8"
});
num9Btn.addEventListener('click',()=>{
  resultScreen.textContent+="9"
  opsScreen.textContent+="9"
});

// const buttons=document.querySelectorAll('button[type="button"]');
// buttons.addEventListener('click',()=>{
//   screenLight();
// });

//* 특수버튼 기능 구현
let isPlusTrue=false;
let isMinusTrue=false;
let isDivTrue=false;
let isMulTrue=false;

//plus
plusBtn.addEventListener('click',()=>{
  //resultScreen에 텍스트가 하나라도 있을 때 실행
  if(resultScreen.textContent.length > 0){
    curResult=resultScreen.textContent;
    resultScreen.textContent="";
    isPlusTrue=true;

    opsScreen.textContent+="+";

    console.log("status:Plus", curResult);
  }
});

//minus
minusBtn.addEventListener('click',()=>{
  if(resultScreen.textContent.length > 0){
    curResult=resultScreen.textContent;
    resultScreen.textContent="";
    isMinusTrue=true;

    opsScreen.textContent+="-";

    console.log("status:Minus", curResult);
  }
});

//divide
divBtn.addEventListener('click',()=>{
  if(resultScreen.textContent.length > 0){
    curResult=resultScreen.textContent;
    resultScreen.textContent="";
    isDivTrue=true;

    opsScreen.textContent+="/";

    console.log("status:Divide", curResult);
  }
});

//multiply
mulBtn.addEventListener('click',()=>{
  if(resultScreen.textContent.length > 0){
    curResult=resultScreen.textContent;
    resultScreen.textContent="";
    isMulTrue=true;

    opsScreen.textContent+="*";

    console.log("status:Multiply", curResult);
  }
});

//delete
delBtn.addEventListener('click',()=>{
  if(resultScreen.textContent.length > 0){
    let result=resultScreen.textContent.slice(0,-1);
    resultScreen.textContent=result;
    opsScreen.textContent=result;
  }
});

//dot
dotBtn.addEventListener('click',()=>{
  if(resultScreen.textContent.length > 0){
    curResult=resultScreen.textContent;
    curResult+=".";
    resultScreen.textContent=curResult;

    opsScreen.textContent+=".";

    console.log(curResult);
  }
});

//result
resultBtn.addEventListener('click',()=>{
  let finResult=parseFloat(curResult);

  if(isPlusTrue){
    finResult+=parseFloat(resultScreen.textContent);
  }else if(isMinusTrue){
    finResult-=parseFloat(resultScreen.textContent);
  }else if(isDivTrue){
    finResult/=parseFloat(resultScreen.textContent);
  }else{
    finResult*=parseFloat(resultScreen.textContent);
  }

  isPlusTrue=false;
  isMinusTrue=false;
  isDivTrue=false;
  isMulTrue=false;
  
  opsScreen.textContent=finResult;
  resultScreen.textContent=finResult;
});
