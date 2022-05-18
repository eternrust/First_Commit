let todolist = [];
let cnt = 0
let id = 0;
const List = document.getElementById('List');
const Checking = document.querySelectorAll('.check');

function NewValue(e){
    let text = document.getElementById('txt').value;
    if(e.keyCode == 13){
        AddTodos(text);
        document.getElementById('txt').value='';
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
    const list = getAllTodos().concat({id:cnt, completed:false, content: text});
    const newTodos = [...getAllTodos(),{id:cnt, completed:false, content: text}];
    setTodos(newTodos);
    update();
}

const update = () => {
    List.innerHTML = null;
    const allTodos=getAllTodos();
    allTodos.forEach(todos => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('work');
        todoDiv.setAttribute("data-id",todos.id);
        
        const todoCheck = document.createElement('div');
        todoCheck.classList.add('check');

        const todoText = document.createElement('div');
        todoText.classList.add('todo');
        todoText.innerHTML=todos.content;

        const todoDel = document.createElement('button');
        todoDel.classList.add('X');
        todoDel.innerHTML = 'X';

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

Checking.forEach((target) => target.addEventListener("click", function() {
    if(this.classList.contains('checked')){
        this.classList.remote('checked');
        this.innerText='';
    } else {
        this.classList.add('checked');
        this.innerText='✔';
    }
}))