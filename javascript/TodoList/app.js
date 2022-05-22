let todolist = [];
let id = 0;
const List = document.getElementById('List');
const TodoDel = document.querySelector('.Del');
const todoInput = document.querySelector('.input');
function NewValue(e){
    let text = document.getElementById('txt').value;
    if(e.keyCode == 13){
        if(text){
        AddTodos(text);
        document.getElementById('txt').value='';
        } else {
            alert('값을 입력해주세요!');
        }
    }
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

    todoItemElem.appendChild(inputElem);
}

const update = () => {
    List.innerHTML = null;
    const todospan = TodoDel.querySelector('span');
    const todolength = getAllTodos().filter(todo => todo.completed == false).length;
    todospan.innerHTML = todolength + ' Items left';
    const allTodos=getAllTodos();
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