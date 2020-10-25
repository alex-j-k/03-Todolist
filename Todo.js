//TODO LIST TODO LISTTODO LISTTODO LISTTODO LISTTODO LISTTODO LIST

const form = document.querySelector('.todoList');
const submitButton = form.querySelector('#submitbut');
const list = document.querySelector('.ulist');
const searchBar = document.querySelector('#searchbox');


submitButton.addEventListener('click', e => {
	e.preventDefault(); 
	const todo = form.chore.value.trim();
console.log(todo);
	generateTodo(todo);
});

const generateTodo = todo => {
const html = `<li><span class="choreleft">${todo}</span><span class="crossoff">DONE</span><span class="xright">X</span></li>`;
list.innerHTML += html; 
form.reset();

};



// DELETE TODO ITEM OR STRIKEOUT TODO ITEM

list.addEventListener('click', e => {

if (e.target.classList.contains('xright'))
	{
		e.target.parentElement.remove();
	} else {
		
	}
});


//STRIKEOUT TODO ITEM

list.addEventListener('click', e => {

if (e.target.classList.contains('crossoff'))
	{
		e.target.previousSibling.style.backgroundColor = 'black'
	} else {
		
	}
});

//Filter function
const filterList = (term) => {
Array.from(list.children)
.filter((item) => !item.textContent.includes(term))
		.forEach((item)=> item.classList.add('filtered'));

Array.from(list.children)
.filter((item) => item.textContent.includes(term))
		.forEach((item)=> item.classList.remove('filtered'));
		
};


//Keyup event
searchBar.addEventListener('keyup', () => {
	const term = searchBar.value.trim();
	filterList(term);
});
