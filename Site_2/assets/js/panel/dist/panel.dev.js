"use strict";

var panel = {
  type: 'info',
  text: '',
  autoclose: false,
  css: {
    panel: "\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        text-align: center;\n        color: #fff;\n        background-color: rgba(123, 123, 123, .7);\n        padding: 20px 50px;\n        font-size: 18px;\n        z-index: 100000;",
    button: " \n        \n        "
  },
  success: function success(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'success';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  info: function info(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'info';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  warning: function warning(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'warning';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },
  danger: function danger(text) {
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.type = 'danger';
    this.text = text;
    this.autoclose = autoclose;
    this.showPanel();
  },

  /*let html = `
      <div id="panel" class="success">
          <p>${text}</p>
          <button type="button">&times;</button>
       </div>`;
       document.querySelector("body").insertAdjacentHTML('afterbegin', html);
  }, */

  /*
  info:function(text){
      let html = `
      <div id="panel" class="info">
          <p>${text}</p>
          <button type="button">&times;</button>
       </div>`;
       document.querySelector("body").insertAdjacentHTML('afterbegin', html);
       // document.querySelector("body").innerHTML = html;
  },*/
  showPanel: function showPanel() {
    var _this = this;

    var html = "\n        <div id=\"panel\" class=\"".concat(this.type, "\">\n            <p>").concat(this.text, "</p>\n           ").concat(this.autoclose === false ? '<button type="button onclick="panel.closePanel()">&times;</button>' : '', "\n         </div>");

    if (document.getElementById("panel") !== null) {
      this.closePanel();
      /*document.getElementById("panel").remove();*/
    }

    document.querySelector("body").insertAdjacentHTML('afterbegin', html);

    if (this.autoclose) {
      setTimeout(function () {
        _this.closePanel();
      }, 3000); //обновляем вкладку и через 3 секунды пропадает панель
    }
  },
  closePanel: function closePanel() {
    document.getElementById("panel").remove();
  }
};
panel.success('Success text here', true);
/*panel.info('Info text here');
panel.warning('Info text here');
panel.danger('Info text here');
*/

/*
Литералы и свойства
Квадратные скобки
Вычисляемые свойства
Свойство из переменной
Имена свойств
Проверка существования свойства
Цикл "for_in"
Упорядочение свойств обьекта;
Копирование обьектов
Клонирование и обьеденение обьектов, object.assign
Вложенное клонирование
Методы обьекта
Ключевое слово This в методах
У стрелочных функций нет this
*/

/*let obj = new Object();   устаревшая запись!!!  */

/*
const bar = 'BAR!!!';

let obj = {
    12: 'foo',
    name:'Vasya',
    'my name':'Alex',   //в любых скобках одинар неодинарн
    '15':'bar',
    getName:function(){
        console.log('NAME');
    }
    summ:2+5,
    foo:bar
},
showThis:function() {
    console.log(this);
}, 
};




let obj2 = Object.assign({}, obj);    //вот так создается копия обьекта (до этого мы скопировали ссылку, поэтому это один и тот же обьект(с одной ячейкиберет данные) 
obj2.name = 'Petr';
console.log(obj);              // Petr
console.log(obj2);             // Petr



console.log(JSON.parse(JSON.stringify(obj)));

let obj2 = JSON.parse(JSON.stringify(obj));






obj.getName();


console.log(obj[12]);
console.log(obj.name);

for(let key in obj){
    console.log(key, obj[key]);
}



/* 1-ая задача по обьектам*/

/*

let user = {
    name:'Bob',
    age:18,
    gender:'male',
    edu:'high',
    phone:'+380937165010',
    email:'user@domain.com',
    fax:'+380512342334'
};

*/

/*
function myFunc(user){      (function myFunc(name, age, gender, edu, email, phone){})
     let r = '<dl>'
     for(let k in user){
         r+=`<dt>${k}</dt>
         <dd>${user[k]}</dd>`;
     }
  
     r+= '</dl>';
     document.getElementById('userdata').innerHTML = r;
}

myFunc(userBob);
*/