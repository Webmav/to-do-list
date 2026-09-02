const search = document.querySelector("#search");
const input = document.querySelector("#input");
const remainingList = document.querySelector("#remainingList");
const completedList = document.querySelector("#completedList");

let i =1;

search.addEventListener('click',()=>{
    let value = input.value;

    const div = document.createElement("div");
    div.id = i;
    remainingList.appendChild(div)

    const inp = document.createElement("input");
    inp.type = 'checkbox';
    inp.class = i;
    console.log(inp);
    div.appendChild(inp);

    const label = document.createElement("label");
    label.textContent = value;
    label.class = i;
    div.appendChild(label);

    const br = document.createElement("br");
    remainingList.appendChild(br);

    i++;
})

