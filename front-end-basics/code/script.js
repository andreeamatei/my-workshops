const initApp = () => {
    const addTodoButton = document.getElementById("add");

    const addFormElement = document.getElementById("add-todo-form");
    addTodoButton.addEventListener("click", () =>{
        toggleTodoForm(addFormElement, addTodoButton, true);
    });

    const saveButton = addFormElement.querySelector("button");
    saveButton.addEventListener("click", (event) => {
        // do not submit the form -> do not refresh the page
        event.preventDefault();

        // get form data
        const todoText = addFormElement.querySelector("input").value;

        // render element
        renderTodo(todoText);
        addTodo({ text: todoText, done: false }); // when adding it, the todo is not yet done

        toggleTodoForm(addFormElement, addTodoButton, false);
    });
};

initApp();

function toggleTodoForm(addFormElement, addTodoButton, showForm) {
    const input = addFormElement.querySelector("input");
    input.value = "";
    addFormElement.style.display = showForm ? "block" : "none";
    addTodoButton.style.display = showForm ? "none" : "block";
    if (showForm) {
        input.focus();
    }
}
  