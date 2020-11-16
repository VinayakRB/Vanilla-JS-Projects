const addForm = document.querySelector(`.add`);
const list = document.querySelector(`.todos`);
const search = document.querySelector(`.search input`);

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

//adding new todos

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

//deleting todos

list.addEventListener('click', e => {
    if(e.target.classList.contains(`delete`)){
        e.target.parentElement.remove();
    }
})

const filterSearch = (term) => {
    // console.log(Array.from(list.children));
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach(term => {
            term.classList.add(`filtered`);
        })

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach(term => {
        term.classList.remove(`filtered`);
    })
}

//search todos
search.addEventListener('keyup', () => {
    // console.log(search.value);
    const term = search.value.toLowerCase();
    // console.log(term);
    filterSearch(term);
})
