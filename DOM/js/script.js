'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
box.style.cssText = `backgroung-color: blue; width: 500px`;

// for (let i = 0; i < hearts.length; i++) {
// hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

//wrapper.append(div); // добавление элемента перед родителем
wrapper.appendChild(div);

//wrapper.prepend(div);  // добавление элемента после

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[0]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h2>ПОЛИНА!</h2>";

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');