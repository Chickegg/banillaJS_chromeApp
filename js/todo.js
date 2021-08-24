const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    console.log("saveToDos");
}
function deleteTodo(event) {
    const li = event.target.parentElement;
    // DB인 toDos는 toDos의 filter함수를 적용한 새로운 배열로 대체된다.
    // 이때 각각의 요소 toDo들은 그 toDo의 id값과 삭제하는 li의 id 값의 일치여부에 따라서
    // 만일 같은 id를 가지고 있다면 trun를 줄 것이다. 그러나 filter함수는 true의 경우에는 변경시키지 않기 떄문에
    // 같은 아이디를 가지면 것을 제거하고싶다면❓
    // 같은 아이디가 아니다 라는 조건을 걸어주게되면 같은아이디의 경우 false를 return 해주고 
    // filter함수에서 걸러져 false가 return된 object를 제외한 array를 만들 것이다.
    //그러나 처음에 해보면 안된다. 왜냐하면 number이기 때문이다.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("input");
    button.type = "submit";
    button.value = "❌";

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
    console.log("paintTodo");
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoForm.addEventListener("submit", saveToDos);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null)  {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach(paintTodo);
}

function sexyFilter(a) {
    console.log(a);
}
[1, 2, 3, 4].filter(sexyFilter);