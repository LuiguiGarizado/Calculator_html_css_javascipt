// Referencias a los cuatro campos
const num1Input   = document.getElementById('num1');
const signInput   = document.getElementById('sign');
const num2Input   = document.getElementById('num2');
const resultInput = document.getElementById('result');

// Botones
const buttons = document.querySelectorAll('.btn');

// En qué parte estamos escribiendo: 'num1' | 'sign' | 'num2' | 'result'
let currentStage = 'num1';

buttons.forEach(btn => btn.addEventListener('click', () => handleClick(btn)));

function handleClick(button){
  const value = button.textContent;

  /* ---------- 1) Botón C ---------- */
  if(button.id === 'c'){
    clearAll();
    return;
  }

  /* ---------- 2) Botón ← ---------- */
  if(button.id === 'delete'){
    backspace();
    return;
  }

  /* ---------- 3) Botón = ---------- */
  if(button.id === 'equal'){
    calculate();
    currentStage = 'result';
    return;
  }

  /* ---------- 4) Signos + - * / ----*/
  if(isOperator(value)){
    if(!num1Input.value) return;          // Aún no hay primer número
    if(!signInput.value){                 // No hay operador → lo agregamos
      signInput.value = value;
      currentStage = 'num2';
    }else{                                // Ya había un operador → encadenamos
      calculate();
      clearExceptResult();                // Deja resultado como nuevo num1
      signInput.value = value;
      currentStage = 'num2';
    }
    return;
  }

  /* ---------- 5) Números o punto ----*/
  if(currentStage === 'num1'){
    num1Input.value += value;
  }else if(currentStage === 'num2'){
    num2Input.value += value;
  }else if(currentStage === 'result'){    // Empezamos nuevo cálculo
    clearAll();
    num1Input.value = value;
    currentStage = 'num1';
  }
}

/* ========== Funciones auxiliares ========== */
function isOperator(val){
  return ['+','-','*','/'].includes(val);
}

function clearAll(){
  num1Input.value   = '';
  signInput.value   = '';
  num2Input.value   = '';
  resultInput.value = '';
  currentStage      = 'num1';
}

function clearExceptResult(){
  num1Input.value   = resultInput.value;
  signInput.value   = '';
  num2Input.value   = '';
  resultInput.value = '';
}

function backspace(){
  if(currentStage === 'num1'){
    num1Input.value = num1Input.value.slice(0,-1);
  }
  else if(currentStage === 'num2'){
    if(num2Input.value.length){
      num2Input.value = num2Input.value.slice(0,-1);
    }else{               // Si ya no hay número 2, quitamos el signo
      signInput.value = '';
      currentStage = 'num1';
    }
  }
  else if(currentStage === 'result'){
    clearAll();          // ← tras un resultado ⇒ reset
  }
}

function calculate(){
  if(num1Input.value && signInput.value && num2Input.value){
    const expression = `${num1Input.value}${signInput.value}${num2Input.value}`;
    try{
      const res = eval(expression);
      resultInput.value = (isFinite(res)) ? res : 'ERROR';
    }catch{
      resultInput.value = 'ERROR';
    }
  }
}