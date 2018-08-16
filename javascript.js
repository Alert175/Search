'use strict'

var mass = [
  'Здесь будет искомое слово ткт.\n ылыоалывоар',
  'А вот тут уже другое, само слово пример',
  'Ну а здесь инскомое слово, привет',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Reprehenderit veritatis, minus officiis reiciendis tempore? Sapiente ullam non impedit, obcaecati hic recusandae deleniti corporis quasi iusto minima distinctio quis eaque harum, qui voluptatibus magnam, quo nobis voluptate! Quo nulla, aspernatur aperiam, reiciendis perferendis dolorem eligendi, similique consequuntur itaque vitae, minus soluta.\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis, minus officiis reiciendis tempore? Sapiente ullam non impedit, obcaecati hic recusandae deleniti corporis quasi iusto minima distinctio quis eaque harum, qui voluptatibus magnam, quo nobis voluptate! Quo nulla, aspernatur aperiam, reiciendis perferendis dolorem eligendi, similique consequuntur itaque vitae, minus soluta.'
];
console.log(mass);



var Ser = document.getElementById('button1');
Ser.addEventListener('click', function() {
  var search = document.getElementById("inp").value;
  console.log(search);

  //Алгоритм посика по значенею
    var seccuss = '';
    var serch = new RegExp(search, );
    console.log(serch);
    for(var i=0; i<mass.length; i++){
      if (serch.test(mass[i])==true) {
        seccuss = mass[i];
        console.log('Complete! '+mass[i]);
      }
      else {
        console.log('Not found :c');
      }
    }
      seccuss = String(seccuss);
      console.log(seccuss);
      var txt = document.getElementById('textAr');
      txt.innerHTML = seccuss;
      txt.value = seccuss;
      console.log('txt.value '+txt.value);
});

// А здесь функция копирования, которая опять не работает :с
var btn = document.getElementById('copyInfo');
btn.addEventListener('click', function () {
      var buff = document.querySelector('#textAr');
                    console.log(buff.value);
      var range = document.createRange();
      range.selectNode(buff);
                    console.log('range--> '+range);
      window.getSelection().addRange(range);
        try {
          document.execCommand('copy');
          console.log('Complete copy!');
        }
        catch {
          console.log('Not range');
        }
        window.getSelection().removeAllRanges();
    });
