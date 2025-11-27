const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Todoを追加
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // クリックで完了・未完了切替
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // ダブルクリックで削除
  li.addEventListener("dblclick", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});
