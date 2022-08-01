let description = document.querySelector('.first-title'); 
let specs = document.querySelector('.second-title');
let other = document.querySelector('.third-title'); 

let firstP = document.querySelector('.first-p');
let secondP = document.querySelector('.second-p');
let thirdP = document.querySelector('.third-p');

function changeText1() {
    firstP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.";
    secondP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; 
    thirdP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."; 
 }
 function changeText2() {
    firstP.innerHTML = "One morning, when Gregor Samsa woke from troubled dreams, he found. a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, ";
    secondP.innerHTML ="The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of";
    thirdP.innerHTML = "It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesma";
 }
 
 function changeText3() {
    firstP.innerHTML = "Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot. ";
   secondP.innerHTML =" I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents";
   thirdP.innerHTML = "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes.";   
}

let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let number = document.querySelector('.number');
let digit = document.querySelector('.number').innerText;

let wholePrize = document.querySelector('.prize-and-counter p'); 
let prize = document.querySelector('.prize-and-counter p').innerText;

let newPrize = prize.replace(',', '.'); 
let withDot = newPrize.substr(0, newPrize.length -2); 

withDot = parseFloat(withDot); 
let counter = 41.99; 

plus.addEventListener('click', () => {
   if(digit >=1) {
      digit++;
      number.innerText = digit; 
      withDot+=counter; 
      wholePrize.innerText = withDot.toFixed(2).replace('.', ',') + ' KM';
   }
})

minus.addEventListener('click', () => {
   if (digit<=1) {
      alert('Ne moze manje od 1')
   } else {
      digit--;
      number.innerText = digit; 
      withDot-=counter; 
      wholePrize.innerText = withDot.toFixed(2).replace('.', ',') + ' KM';
   }
})


let products = document.querySelector('#proizvodi')

products.addEventListener('click', () => window.scrollTo({

   top: 875,
   behavior: 'smooth',
}))


let sell = document.querySelector('#rasprodaja')

sell.addEventListener('click',  () => window.scrollTo({
   top: 1760,
   behavior: 'smooth',

}))


let action = document.querySelector('#akcija')

action.addEventListener('click', () => window.scrollTo({

   top: 2647,
   behavior: 'smooth',

}))

let contact = document.querySelector('#kontakt')

contact.addEventListener('click',() => window.scrollTo({
   top: 4975,
   behavior: 'smooth',

}))

const el = document.querySelector('.sixth-page'); 
const eldistance = window.pageYOffset + el.getBoundingClientRect().top;
console.log(eldistance);

let mainPic = document.querySelector('.main-img');
let img1 = document.querySelector('.img1'); 
let img2 = document.querySelector('.img2'); 
let img3 = document.querySelector('.img3'); 
let img4 = document.querySelector('.img4');


img1.addEventListener('click', () => {
   mainPic.style.backgroundImage = "url('css/img/Mask Group 6.png')"
mainPic.style.backgroundSize ="cover";  
}) 

img2.addEventListener('click', () => {
   mainPic.style.backgroundImage = "url('css/img/Mask Group 4.png')"
mainPic.style.backgroundSize ="cover";  
}) 

img3.addEventListener('click', () => {
   mainPic.style.backgroundImage = "url('css/img/Mask Group 3.png')"
mainPic.style.backgroundSize ="cover";  
}) 

img4.addEventListener('click', () => {
   mainPic.style.backgroundImage = "url('css/img/Mask Group 2.png')"
mainPic.style.backgroundSize ="cover";  
}) 
