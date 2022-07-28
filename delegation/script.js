const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn__block');

// console.log(btns[0].classList.length); количество классов элемента
// console.log(btns[0].classList.item(0)); возвращает класс элемента по индексу
// console.log(btns[1].classList.add('white')); добавляет класс элементу
// console.log(btns[1].classList.remove('white')); удаляет класс элемента
// console.log(btns[1].classList.toggle('blue')); тоглит класс элемента
// e.target.localName => свойтво значением которого является имя элемента
// e.target.tagName => свойтво значением которого является тег элемента  P.S всегда в верхенм регистре
// e.target.matches() => проверяет на наявность тех или иных тегов, классов, id и возвращет boolean

// if (btns[1].classList.contains('white')) {
//     console.log('white');
// } else {
//     console.log('black');
// }

// btns[1].addEventListener('click', () => {
//     // btns[1].classList.contains('blue') ? btns[1].classList.remove('blue') : btns[1].classList.add('blue');
//     // btns[1].classList.toggle('blue');
// });

wrapper.addEventListener('click', (e) => {
    e.target.matches('button') ? e.target.classList.toggle('blue') : null 
});

// const btn = document.createElement('button');
// btn.classList.add('new');
// wrapper.append(btn);
