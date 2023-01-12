// var Typed = new Typed(".auto-input, .auto-input-2, .auto-input-3, .auto-input-4, .auto-input-5",{
//     strings: ["in luxury vehicles", "Sit back &amp; arrive", "our black car", "limousine service", "next night out",],
//     typeSpeed: 100,
//     backSpeed: 0,
//     loop: true,
// });
// var Typed_2 = new Typed(".auto-input-2",{
//     strings: ["in luxury vehicles", "Sit back &amp; arrive", "our black car", "limousine service", "next night out",],
//     typeSpeed: 100,
//     backSpeed: 0,
//     loop: true,
// });
// var Typed_3 = new Typed(".auto-input-3",{
//     strings: ["in luxury vehicles", "Sit back & arrive", "our black car", "limousine service", "next night out",],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true,
// });
// var Typed_4 = new Typed(".auto-input-4",{
//     strings: ["in luxury vehicles", "Sit back & arrive", "our black car", "limousine service", "next night out",],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true,
// });
// var Typed_5 = new Typed(".auto-input-5",{
//     strings: ["in luxury vehicles", "Sit back & arrive", "our black car", "limousine service", "next night out",],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true,
// });



const texts = document.querySelectorAll('.auto-input');
const textLengthArr = [];

texts.forEach((el, idx) => {
    textLengthArr.push(el.textContent.length);
});

const elOne = texts[0];
const elTwo = texts[1];
const elThree = texts[2];

function write(el, num) {
    let computedStyles = window.getComputedStyle(el);
    document.documentElement.style.setProperty('--length', textLengthArr[num]); 
    document.documentElement.style.setProperty('--duration', textLengthArr[num] * 100); 
    el.classList.add('animated'); 
}

write(elOne, 0);

elOne.addEventListener('animationend', (e) => {
    e.target.style.border = 'none';
    write(elTwo, 1);
});

elTwo.addEventListener('animationend', (e) => {
    e.target.style.border = 'none';
    write(elThree, 2);
});


const textsArr = ['and then erase', 'again', 'goodbye'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let repeat = document.querySelector('.repeat')
let typing = document.querySelector('.typing');

elThree.addEventListener('animationend', type)


function type() {
    
    repeat.classList.add('is-active');

        
    if (count === textsArr.length) {
        clearTimeout(clearIt)   
        count = 0;
    }

    currentText = textsArr[count];
    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    let clearIt = setTimeout(type, 200);

    
}





