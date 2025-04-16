const staffList = [
  "Akram",
  "Alex",
  "Ali",
  "Ana",
  "Ariana",
  "Bijay",
  "Bikash",
  "Binita",
  "Carina",
  "Carol",
  "Curica",
  "Domi",
  "Eliseu",
  "Elivelton",
  "Eva",
  "Geovana",
  "Gisa",
  "Jamaica",
  "Juliana",
  "King",
  "Letícia",
  "Lucrecia",
  "Nilton",
  "Paulo",
  "Pawan",
  "Regis",
  "Rose",
  "Subarna",
  "Sudip",
  "Susmita",
  "Yago",
];

let TotalOfDays = 0;

const main = document.querySelector("main");

staffList.forEach((member) => {
  const card = document.createElement("li");
  //criar a barra de navegação com dois botões
  const nav = document.createElement("nav");
  const sumBtn = document.createElement("button");
  sumBtn.textContent = "+";
  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";
  nav.append(sumBtn, minusBtn);

  //a parte do nome da pessoa
  const areaName = document.createElement("section");
  areaName.textContent = member;

  const spanNumber = document.createElement("span");
  spanNumber.classList = "daysWorked";
  let days = 5;
  TotalOfDays += days;
  //função que reduz um no índice
  minusBtn.addEventListener("click", () => {
    if (days > 0) {
      days -= 1;
      TotalOfDays -= 1;
      spanNumber.textContent = days;
      showTotalDays();
    }
  });

  sumBtn.addEventListener("click", () => {
    if (days < 6) {
      days += 1;
      spanNumber.textContent = days;
      TotalOfDays += 1;
      showTotalDays();
    }
  });

  spanNumber.textContent = days;
  card.append(nav, areaName, spanNumber);
  main.appendChild(card);
});

const displayDays = document.querySelector("#totalDaysDisplay");
function showTotalDays() {
  displayDays.textContent = TotalOfDays;
}
showTotalDays();

const finishBtn = document.querySelector("#concludeBtn");
finishBtn.addEventListener("click", () => {
  const tipsValue = document.getElementById("tipsTotal").value;
  const valueForDay = tipsValue / TotalOfDays;

  main.innerHTML = `
  <div class="result-container">
    
    <p>Valor para 1 dia: ${valueForDay.toFixed(2)}€</p>
    <p>Valor para 2 dias: ${(2 * valueForDay).toFixed(2)}€</p>
    <p>Valor para 3 dias: ${(3 * valueForDay).toFixed(2)}€</p>
    <p>Valor para 4 dias: ${(4 * valueForDay).toFixed(2)}€</p>
    <p>Valor para 5 dias: ${(5 * valueForDay).toFixed(2)}€</p>
    
  </div>
`;
});
