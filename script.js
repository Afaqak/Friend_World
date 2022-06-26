
const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider-item');
let count = 0;
const maxSlide = slides.length;
console.log(maxSlide);
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');


let slideNext = (count) => {
    slides.forEach((element, i) => {
        element.style.transform = `translateX(${(i - count) * 100}%)`;
    });

}
slideNext(0);
const next = () => {
    if (count === slides.length - 1) {
        count = 0;
    }
    else {
        count++
    }
    slideNext(count);
}
btnRight.addEventListener('click', next);

const prevSlide = () => {
    if (count === 0) {
        count = slides.length;
    }
    count--;

    slideNext(count);
}
btnLeft.addEventListener('click', prevSlide);

let nav = document.querySelector('.nav-list');
let x = document.querySelector('.bi-x-lg');
let icon = document.querySelector('.bi');
icon.addEventListener('click', () => {
    nav.style.display = 'block';
    icon.style.display = 'none';
    x.style.display = 'block';
})

x.addEventListener('click', () => {
    nav.style.display = 'none';
    icon.style.display = 'block';
    x.style.display = 'none';
})


// const longestPalindromicSubstring = (str) => {
//     let even, odd, longest = 0;
//     for (let i = 0; i < str.length; i++) {
//         even = expandFromCenter(str, i, i);
//         odd = expandFromCenter(str, i, i + 1);
//         console.log(even, odd);
//         if (even.length > longest) {
//             longest = even.length;
//         }
//         if (odd.length > longest) {
//             longest = odd.length;
//         }

//     }
//     return longest;
// }
// const expandFromCenter = (str, left, right) => {
//     while (left >= 0 && right < str.length && str[left] === str[right]) {
//         console.log(str[left], str[right]);
//         left--;
//         right++;
//     }
//     return str.slice(left + 1, right)//this is the longest palindromic substring;
// }
// console.log(longestPalindromicSubstring('alolb'));