// #6957af
// #f72b1c
// #8329d6
// #bb4c73
// #9acd32


// change background
// change heading
// change border button
'use strict'
const header = document.querySelector('header');
const heading = document.querySelector('.main__heading-primary');
const btn = document.querySelector('.btn');

const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item =>{
	item.addEventListener('click',(e)=>{
		if (e.target.id === 'color1') {
			heading.style.color = `#6957af`;
			btn.style.border = `4px solid #6957af`;

		}
		if (e.target.id === 'color2') {
			heading.style.color = `#f72b1c`;
			btn.style.border = `4px solid #f72b1c`;
		}
		if (e.target.id === 'color3') {
			heading.style.color = `#8329d6`;
			btn.style.border = `4px solid #8329d6`;
		}
		if (e.target.id === 'color4') {
			heading.style.color = `#bb4c73`;
			btn.style.border = `4px solid #bb4c73`;
		}
		if (e.target.id === 'color5') {
			heading.style.color = `#9acd32`;
			btn.style.border = `4px solid #9acd32`;
		}
	});
});