const add_tag = document.getElementById("add-tag");
const tag_list = document.getElementById("tags");
let colors = ["tag-pink", "tag-skyblue", "tag-lightgreen", "tag-lightwsalmon", "tag-peachpuff"];

let currentColorIndex = 1;
let valueIndex = 1;

add_tag.addEventListener('click', () => {
    const original_tag = document.getElementById("tag");
    const new_tag = original_tag.cloneNode(true);
    
    new_tag.classList.remove(...colors);
    new_tag.classList.add(colors[currentColorIndex])
    
    tag_list.insertBefore(new_tag, add_tag)

    currentColorIndex = (currentColorIndex + 1) % colors.length;

    new_tag.value = `tag ${valueIndex+1}`
    valueIndex += 1
});