// Your code goes here
const busImg = document.querySelector('img');
busImg.addEventListener('mouseenter', (event) => {
    busImg.style.transform = 'scale(1.5)';
    busImg.style.transition = "all 0.3s";
});

busImg.addEventListener('mouseleave', (event) => {
    busImg.style.transform = 'scale(1.0)';
    busImg.style.transition = "all 0.3s";
});

const welcome = document.querySelector('.intro');
welcome.addEventListener('wheel', (event) => { 
    event.target.style.background = 'yellow';
});
welcome.addEventListener('click', (event) => {
    event.target.style.background = '';
})

const spinImg = document.querySelector('.img-content');
spinImg.addEventListener('dblclick', (event) => {
    spinImg.style.transform = 'rotate(360deg)';
    spinImg.style.transition = "all 0.3s";
})

