let todoList = ['Do the exercise']

function renderTodoList() {
  document.getElementById('todo-list').innerHTML = "";
  todoList.forEach((ele) => {
    document.getElementById('todo-list').innerHTML += '<li>' + ele + '</li>';
  })
}

function onAddTodoItem() {
  let todoItemValue = document.getElementById('input-todo');
  todoList.push(todoItemValue.value);

  todoItemValue.value = "";
  renderTodoList();

}
