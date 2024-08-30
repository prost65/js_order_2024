// наценки на парфюм в зависимомти от миллилитров
let mls = {
  ml1: 80,
  ml2: 120,
  ml3: 200,
  ml4: 250,
  ml5: 300,
};
//итого
let number = $("#all").text();
number = +number;

//обработчик чекбоксов
document.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    if (event.target.checked) {
      console.log(`Чекбокс ${event.target.id} выбран`);
      number += mls[event.target.id];
      console.log(number);
      $("#all").text(number);
    } else {
      console.log(`Чекбокс ${event.target.id} не выбран`);
      number -= mls[event.target.id];
      console.log(number);
      $("#all").text(number);
    }
  }
});
