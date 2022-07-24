const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = () => {
//     alert('click')
// }

// btn.addEventListener('click', () => {
//     alert('click');
// });
// let i = 0;
const deleteElem = (event) => {
    // event.target.style.backgroundColor = '#1c1c1c';
    console.log(event.currentTarget);
    console.log(event.type);
    // i++
    // if (i === 1) {
    //     btn.removeEventListener('mouseenter', deleteElem);
    // }
}

btn.addEventListener('click', deleteElem);
overlay.addEventListener('click', deleteElem);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});