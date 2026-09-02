const search = document.querySelector("#search");
const input = document.querySelector("#input");
const remainingList = document.querySelector("#remainingList");
const completedList = document.querySelector("#completedList");
const hide = document.querySelector("#hide");
const hA = document.querySelector("#h-s");

let i =1;

search.addEventListener('click',()=>{
    let value = input.value;

    const div = document.createElement("div");
    div.id = i;
    remainingList.appendChild(div)

    const inp = document.createElement("input");
    inp.type = 'checkbox';
    inp.value = value;
    inp.id = `inp${i}`;
    div.appendChild(inp);

    const label = document.createElement("label");
    label.textContent = value;
    label.class = i;
    div.appendChild(label);

    const buttonIn = document.createElement("button");
    buttonIn.value = "Remove";
    div.appendChild(buttonIn);

   /* buttonIn.addEventListener('click',()=>{
        remainingList.remove(div) ||
        completedList.remove(div);
    }) */

    i++;

    inp.addEventListener('change', function(){
        if(this.checked){
            completedList.appendChild(div);
        }
        else {
            remainingList.appendChild(div);
        }
    })

});

hA.addEventListener('click',()=>{
    if(hide.style.display===""){
        hide.style.display="none";
    }
    else if(hide.style.display === "none"){
        hide.style.display="";
    }
});

//remainings
//Click remove to remove a list or checkbox
