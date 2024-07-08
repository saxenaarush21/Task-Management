const addList = document.getElementById("add-list");
const listCont = document.getElementById("lists");
let listColor = ["block-red","block-blue","block-green","block-orange","block-yellow"];

let listColorIdx = 1;

addList.addEventListener('click', () => {
    const original_list = document.getElementById("originalList");
    const newList = original_list.cloneNode(true);
    const block = newList.querySelector("#block")

    block.classList.remove(...listColor)
    block.classList.add(listColor[listColorIdx])

    listCont.appendChild(newList);

    listColorIdx = (listColorIdx + 1) % listColor.length
});
