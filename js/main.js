let list = document.querySelector('#list');
let listChild = list.children;

function creatspan(elem) {
    let span = document.createElement('elem');
    span.classList.add('nav');
    span.innerHTML = "v";
    return span
}

for (let i = 0; i <= listChild.length; i++) {
    listChild[i].appendChild(creatspan('SPAN'));
}


