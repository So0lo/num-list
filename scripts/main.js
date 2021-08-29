const inputName = document.getElementById(`input_name`);
const inputColor = document.getElementById(`input_color`);
const selectMarker = document.getElementById(`select_marker`);

const btnCreate = document.getElementById(`btn_create`);
const btnChange = document.getElementById(`btn_change`);
const btnDelete = document.getElementById(`btn_delete`);

const ul = document.querySelector(`ul`);


addEventListener(`click`, function (event) {
    if(event.target.localName === `li`) {
        if (event.target.classList.contains(`border`)) {
            event.target.classList.remove(`border`);
            return;
        }
        event.target.classList.add(`border`);
    }
});


function createLi () {
    const li = document.createElement(`li`);
    li.textContent = inputName.value === '' ? 'list' : inputName.value;
    li.style.color = inputColor.value;
    li.style.listStyle = selectMarker.value;
    ul.append(li);
}

btnCreate.addEventListener(`click`, createLi);

function changeLi () {
    let x = 0;
    [...ul.children].forEach((el) => {
        if (el.classList.contains(`border`)) {
            el.textContent = inputName.value === '' ? 'list' : inputName.value;
            el.style.color = inputColor.value;
            el.style.listStyle = selectMarker.value;
            x++;
            el.classList.remove(`border`);
        }
    });
    if (!x) {
        alert(`Вы не выделили ни одного элемента`);
    }
}

btnChange.addEventListener(`click`, changeLi);

function deleteLi () {
    let x = 0;
    [...ul.children].forEach((el) => {
        if (el.classList.contains(`border`)) {
            el.remove();
            x++;
        }
    });
    if (!x) {
        alert(`Вы не выделили ни одного элемента`);
    }
}

btnDelete.addEventListener(`click`, deleteLi);






