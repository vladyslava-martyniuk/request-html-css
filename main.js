// Завдання 1: Обчислення
function calculate() {
  const num = Number(document.getElementById("numberInput").value);
  const square = num ** 2;
  const cube = num ** 3;
  const remainder = num % 5;

  const result = `
    Квадрат: ${square}<br>
    Куб: ${cube}<br>
    Залишок від ділення на 5: ${remainder}
  `;
  document.getElementById("result").innerHTML = result;
}

// Завдання 2: Перевірка парності
function isEven(n) {
  return n % 2 === 0;
}

function checkEvenOdd() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `Число ${i} є ${isEven(i) ? 'парним' : 'непарним'}<br>`;
  }
  document.getElementById("evenOddResult").innerHTML = output;
}
// Завдання 3: Зміна кольору фону
const colors = ["red", "blue", "green", "yellow", "purple"];
let colorIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}