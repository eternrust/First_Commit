let todolist = [];
let id = 0;
const List = document.getElementById('List');
const TodoDel = document.querySelector('.Del');

const init = () => {
    const text = document.querySelector('#txt');
    const AllCheck = document.querySelector('#V');
    const checkclass = AllCheck.className; 
    text.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            AddTodos(text.value);
            text.value = '';
        }
    })
    AllCheck.addEventListener('click', () => completedCheck());
}

const iscompleteAll = () => {
    const todo = getAllTodos().length;
    const check = completedtrue.length;
    if(todo==check) return true;
    else return false; 
}

const completedtrue = () => {
    return getAllTodos().filter(todo => todo.completed===true);
}

const completedfalse = () => {
    return getAllTodos().filter(todo => todo.completed===false);
}



const completedCheck = () => {
    if(getAllTodos().length==0) return;

    if(iscompleteAll()) alert('good');
    
}

const setTodos = (newTodos) => {
    todolist = newTodos;
}
const getAllTodos = () => {
    return todolist;
}

const AddTodos = (text) => {
    const cnt = id++;
    const newTodos = [...getAllTodos(),{id:cnt, completed:false, content: text}];
    setTodos(newTodos);
    update();
}

const Checking = (todoId) => {
    const todo = getAllTodos().map(todo => todo.id === todoId ? {...todo, completed:!todo.completed} : todo);
    setTodos(todo);
    update();
}

const Delete = (todoId) => {
    const todo = getAllTodos().filter(todo => todo.id !== todoId);
    setTodos(todo);
    update();
}

const resetText = (e, todoId) => {
    const todoElem = e.target;
    const inputText = e.target.innerText;
    const todoItemElem = todoElem.parentNode;
    const inputElem = document.createElement('input');
    inputElem.value = inputText;
    inputElem.classList.add('edit');

    inputElem.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            setText(e.target.value,todoId);
            document.body.removeEventListener('click',clickbody);
        }
    })
    const clickbody = (e) => {
        if(e.target !== inputElem){
            todoItemElem.removeChild(inputElem);
            document.body.removeEventListener('click',clickbody);
        }
    }

    document.body.addEventListener('click',clickbody);
    todoItemElem.appendChild(inputElem);
}

const setText = (value,todoId) => {
    const todo = getAllTodos().map(todo => todo.id === todoId ? {...todo,content: value} : todo);
    setTodos(todo);
    update();
}

const update = () => {
    List.innerHTML = null;
    const allTodos=getAllTodos();
    const todospan = TodoDel.querySelector('span');
    const todolength = allTodos.filter(todo => todo.completed == false).length;
    todospan.innerHTML = todolength + ' Items left';
    const AllCheck = document.querySelector('#V');
    if(todolength==0){
        AllCheck.classList.add('Checked');
    } else {
        AllCheck.classList.remove('Checked');
    }
    allTodos.forEach(todos => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('work');
        todoDiv.setAttribute("data-id",todos.id);
        
        const todoCheck = document.createElement('div');
        todoCheck.classList.add('check');
        todoCheck.addEventListener('click', () => Checking(todos.id));

        const todoText = document.createElement('div');
        todoText.classList.add('todo');
        todoText.innerHTML=todos.content;
        todoText.addEventListener('dblclick', (event) => resetText(event, todos.id));

        const todoDel = document.createElement('button');
        todoDel.classList.add('X');
        todoDel.innerHTML = 'X';
        todoDel.addEventListener('click', () => Delete(todos.id));

        if(todos.completed){
            todoDiv.classList.add('checked');
            todoCheck.innerText = '✔';
        }

        todoDiv.appendChild(todoCheck);
        todoDiv.appendChild(todoText);
        todoDiv.appendChild(todoDel);
        
        List.appendChild(todoDiv);
    })
}

TodoDel.addEventListener('click',(e) => {
    if(e.target.id=='All'){
        TodoDel.setAttribute("data-id",'1');
    } else if(e.target.id=='Active'){
        TodoDel.setAttribute("data-id",'2');
    } else if(e.target.id=='Completed'){
        TodoDel.setAttribute("data-id",'3');
    } else if(e.target.id=='Clear'){
        todolist=[];
    }
    update();
})

init()