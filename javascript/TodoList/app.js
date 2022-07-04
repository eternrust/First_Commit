let List = [];
let id = 0;
let completeAll = false;
const todoItemElem = document.querySelector('#List');
const check = document.querySelector('#V');
const under = document.querySelector('.Del');
const underbutton = document.querySelectorAll('#Del_button input');

const AddValue = (text) => {
    const cnt = id++;
    const todos = [...getAllTodos(),{id:cnt,completed:false,content:text}]
    setAllTodos(todos);
    Update();
}

const setAllTodos = (todos) => {
    List = todos;
}

const getAllTodos = () => {
    return List;
}

const todoCheck = (todoId) => {
    const todos = getAllTodos().map(todo => todo.id===todoId?{...todo, completed:!todo.completed}:todo);
    setAllTodos(todos);
    Update();
    Itemleft();
}

const todoDel = (todoId) => {
    const todos = getAllTodos().filter(todo => todo.id!==todoId);
    setAllTodos(todos);
    Update();
    Itemleft();
}

const resetElem = (text, todoId) => {
    const todos = getAllTodos().map(todo => todo.id===todoId?{...todo, content:text}:todo);
    setAllTodos(todos);
    Update();
}

const resetText = (e, todoId) => {
    const todoElem = e.target;
    const todoItemElem = todoElem.parentNode;
    const todoText = todoElem.innerText;
    const inputElem = document.createElement('input');
    inputElem.classList.add('edit');
    inputElem.value = todoText;
    
    inputElem.addEventListener('keypress',(e) => {
        if(e.key==='Enter'){
            resetElem(inputElem.value, todoId);
            document.body.removeEventListener('click',bodyclick);
        }
    })

    const bodyclick = (e) => {
        if(e.target!== inputElem){
            todoItemElem.removeChild(inputElem);
            document.body.removeEventListener('click',bodyclick);
        }
    }
    document.body.addEventListener('click',bodyclick);
    todoItemElem.appendChild(inputElem);
}

const iscompleteAll = () => {
    if(getAllTodos().length===0) return;

    if(completeAll) incompleted();
    else completed();

    Update();
    Itemleft();
}

const completedTrue = () => {
    return getAllTodos().filter(todo => todo.completed===true);
}

const completedFalse = () => {
    return getAllTodos().filter(todo => todo.completed===false);
}

const incompleted = () => {
    check.classList.add('Checked');
    const todos = getAllTodos().map(todo => ({...todo, completed:false}));
    setAllTodos(todos);
}

const completed = () => {
    check.classList.remove('Checked');
    const todos = getAllTodos().map(todo => ({...todo, completed:true}));
    setAllTodos(todos);
}

const Itemleft = () => {
    const clear = completedFalse();
    const span = document.querySelector('.Del span');
    span.innerHTML = `${clear.length} Items left`;
    if(!clear.length && getAllTodos().length){
        check.classList.add('Checked');
        completeAll = true;
    } else {
        check.classList.remove('Checked');
        completeAll = false;
    }
}

const underclick = (e) => {
    switch(e.target.id){
        case 'All':
        case 'Active':
        case 'Completed':
            under.setAttribute('data-id', e.target.id); 
            underbutton.forEach(button => button.id===e.target.id?
                button.style.outline = '3px solid orange':
                button.style.outline = '1px solid gray')
            break;
        case 'Clear':  clearDel(); break;
    }
    Update();
    Itemleft();
}

const clearDel = () => {
    const todos = completedFalse();
    setAllTodos(todos);
}
const getList = () => {
    switch(under.dataset.id){
        case 'Active': return completedFalse();
        case 'Completed': return completedTrue();
        default: return getAllTodos();
    }
}

const Update = () => {
    todoItemElem.innerHTML = null;
    const todos = getList();
    todos.map(todo => {
        const todoElem = document.createElement('div');
        todoElem.classList.add('work');
        todoElem.setAttribute('data-id', todo.id);

        const checkElem = document.createElement('div');
        checkElem.classList.add('check');
        if(todo.completed){
            todoElem.classList.add('checked');
            checkElem.innerText = '✔';
        }
        checkElem.addEventListener('click',() => todoCheck(todo.id));

        const textElem = document.createElement('div');
        textElem.classList.add('todo');
        textElem.innerText = todo.content;
        textElem.addEventListener('dblclick',(event) => resetText(event, todo.id));

        const DelElem = document.createElement('div');
        DelElem.classList.add('X');
        DelElem.innerHTML = 'X';
        DelElem.addEventListener('click',() => todoDel(todo.id));

        todoElem.appendChild(checkElem);
        todoElem.appendChild(textElem);
        todoElem.appendChild(DelElem);

        todoItemElem.appendChild(todoElem);
    })
}

const init = () => {
    const inputElem = document.querySelector('#txt');
    
    inputElem.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            AddValue(inputElem.value);
            inputElem.value = null;
            Itemleft();
        }
    })
    check.addEventListener('click',() => iscompleteAll());
    under.addEventListener('click',(event) => underclick(event));
    under.setAttribute('data-id', 'All');
}

init();