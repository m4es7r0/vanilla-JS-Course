'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = '#1c1c1c';
// box.style.width = '415px';

box.style.cssText = 'background-color: #1c1c1c; width: 41   5px;';

btns[1].style.borderRadius = '100px';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => item.style.backgroundColor = 'blue');

const div = document.createElement('div');
// const text = document.createTextNode('some text');

div.classList.add('black');
div.style.width = '100px';
div.style.height = '100px';

document.body.append(div);

// document.querySelector('.wrapper').append(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>hello world</h1>'; // danger code
// div.textContent = 'hello world'; // save code

div.insertAdjacentHTML('beforebegin', '<h2>its h2</h2>');




// legsy code

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[0]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]);