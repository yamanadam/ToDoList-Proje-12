const add = document.querySelector("#add");

const text = document.querySelector("#text");
const ul = document.querySelector("#ulDom");
console.log(ul);

const createLi = () => {
  itemLi = document.createElement("li");

  itemIcon = document.createElement("i");
  itemIcon.setAttribute("class", "fa-regular fa-circle-check");
  itemLi.appendChild(itemIcon);

  itemP = document.createElement("p");
  itemText = document.createTextNode(text.value);
  itemP.appendChild(itemText);
  itemLi.appendChild(itemP);

  itemDel = document.createElement("i");
  itemDel.setAttribute("class", "fa-solid fa-delete-left");
  itemLi.appendChild(itemDel);

  ul.appendChild(itemLi);
};

add.addEventListener("click", (e) => {
  e.preventDefault();
  createLi();
  text.value = "";
  text.focus();
});

ul.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(itemLi);
  if (e.target.classList.contains("fa-regular")) {
    e.target.parentElement.classList.toggle("done");
  } else if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.remove();
  }
});

window.onload = () => {
  text.focus();
};

text.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    add.click();
  }
});
