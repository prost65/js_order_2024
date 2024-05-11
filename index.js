// наценки на парфю в зависимомти от миллилитров
let mls = {
    0: 80,
    1: 120,
    2: 200,
    3: 250,
    4: 300
}

let inputs = document.querySelectorAll('.ml');
console.log(inputs);

// проходимся по вем из 5 чекбоксов
  for (let i = 0; i < 6; i++) {
    inputs[i].addEventListener('change', function() {
      // проверяем нажатие на определенный чекбокс
        // console.log(`Чекбокс ml1 ${this.checked ? 'выбран' : 'не выбран'}.`);
    
        // достаем цифру из "итого", которую будем изменять
        let number  =  $("#all").text()
        // поскольку в теге у нас изначально строки, то нужно преобразовать наше число в цифру, чтобы оно правивльно складывалось
        number = +number
        console.log(number);
     
    
        // если чекбокс выбран, то прибавляем соответсвующую наценку
        if (this.checked) {
          console.log(`Чекбокс ${i} выбран`);
          number += mls[i]
          console.log(number);
          $('#all').text(number);
        } else {
          console.log("Чекбокс не выбран");
          number -= mls[i]
          console.log(number);
          $('#all').text(number);
        }
      });
  }

  // document.querySelector('#ml1').addEventListener('change', function() {
  //   console.log(`Чекбокс ml1 ${this.checked ? 'выбран' : 'не выбран'}.`);
  // });

  // document.querySelector('#ml2').addEventListener('change', function() {
  //   console.log(`Чекбокс ml2 ${this.checked ? 'выбран' : 'не выбран'}.`);
  // });

  // document.querySelector('#ml3').addEventListener('change', function() {
  //   console.log(`Чекбокс ml3 ${this.checked ? 'выбран' : 'не выбран'}.`);
  // });

  // document.querySelector('#ml4').addEventListener('change', function() {
  //   console.log(`Чекбокс ml4 ${this.checked ? 'выбран' : 'не выбран'}.`);
  // });

  // document.querySelector('#ml5').addEventListener('change', function() {
  //   console.log(`Чекбокс ml5 ${this.checked ? 'выбран' : 'не выбран'}.`);
  // });