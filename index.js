// наценки на парфю в зависимомти от миллилитров
let mls = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5:50
}

document.querySelector('#ml1').addEventListener('change', function() {
    console.log(`Чекбокс ml1 ${this.checked ? 'выбран' : 'не выбран'}.`);
  });

  document.querySelector('#ml2').addEventListener('change', function() {
    console.log(`Чекбокс ml2 ${this.checked ? 'выбран' : 'не выбран'}.`);
  });

  document.querySelector('#ml3').addEventListener('change', function() {
    console.log(`Чекбокс ml3 ${this.checked ? 'выбран' : 'не выбран'}.`);
  });

  document.querySelector('#ml4').addEventListener('change', function() {
    console.log(`Чекбокс ml4 ${this.checked ? 'выбран' : 'не выбран'}.`);
  });

  document.querySelector('#ml5').addEventListener('change', function() {
    console.log(`Чекбокс ml5 ${this.checked ? 'выбран' : 'не выбран'}.`);
  });