// наценки на парфю в зависимомти от миллилитров
let mls = {
  ml1: 80,
  ml2: 120,
  ml3: 200,
  ml4: 250,
  ml5: 300
}

// достаем цифру из "итого", которую будем изменять
let number  =  $("#all").text()
// поскольку в теге у нас изначально строки, то нужно преобразовать наше число в цифру, чтобы оно правивльно складывалось
number = +number

document.addEventListener('change', function(event) {
  if (event.target.type === 'checkbox') {
    if (event.target.checked) {
      console.log(`Чекбокс ${event.target.id} выбран`);
      number += mls[event.target.id]
      console.log(number);
      $('#all').text(number);
    } else {
      console.log(`Чекбокс ${event.target.id} не выбран`);
      number -= mls[event.target.id]
      console.log(number);
      $('#all').text(number);
    }
  }
});

// проходимся по всем из 5 чекбоксов
// let inputs = document.querySelectorAll('.ml');
// console.log(inputs);
// for (let i = 0; i < 6; i++) {
//   inputs[i].addEventListener('change', function() {
//     // проверяем нажатие на определенный чекбокс
//       // console.log(`Чекбокс ml1 ${this.checked ? 'выбран' : 'не выбран'}.`);
  
//       // достаем цифру из "итого", которую будем изменять
//       let number  =  $("#all").text()
//       // поскольку в теге у нас изначально строки, то нужно преобразовать наше число в цифру, чтобы оно правивльно складывалось
//       number = +number
//       console.log(number);
   
//       // если чекбокс выбран, то прибавляем соответсвующую наценку
//       if (this.checked) {
//         console.log(`Чекбокс ${i} выбран`);
//         number += mls[i]
//         console.log(number);
//         $('#all').text(number);
//       } else {
//         console.log("Чекбокс не выбран");
//         number -= mls[i]
//         console.log(number);
//         $('#all').text(number);
//       }
//     });
// }

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