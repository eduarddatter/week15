const cities = ["Рим", "Париж", "Берлин", "Москва"];
const temperatures = [];
let list = document.getElementById("myList");

for (let i = 0; i < cities.length; i++) {
  let temperature = prompt(`Введите температуру для города ${cities[i]}`);
  temperatures.push(Number(temperature));
}

for (let i = 0; i < cities.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Температура в ${cities[i]}: ${temperatures[i]}℃`;
  list.appendChild(li);
}

function findMaxTemperature(temperature) {
  const maxTemperature = Math.max(...temperatures);
  let li = document.createElement("li");
  li.textContent = `Максимальная температура: ${maxTemperature}℃`;
  list.appendChild(li);
}

findMaxTemperature();

function findMinTemperature(temperature) {
  const maxTemperature = Math.min(...temperatures);
  let li = document.createElement("li");
  li.textContent = `Минимальная температура: ${maxTemperature}℃`;
  list.appendChild(li);
}

findMinTemperature();
