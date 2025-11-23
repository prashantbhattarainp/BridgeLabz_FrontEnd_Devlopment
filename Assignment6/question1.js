const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

let currentlyEditing = null;

function createProductListItem(name) {
    const li = document.createElement('li');

    const nameWrap = document.createElement('div');
    nameWrap.className = 'editable';
    nameWrap.textContent = name;
    li.appendChild(nameWrap);

    const controls = document.createElement('div');
    controls.className = 'controls';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';

    const delBtn = document.createElement('button');
    delBtn.className = 'delete';
    delBtn.textContent = 'Delete';

    controls.appendChild(editBtn);
    controls.appendChild(delBtn);
    li.appendChild(controls);

    return li;
}

addBtn.addEventListener('click', () => {
    const name = productInput.value.trim();
    if (!name) return alert('Please enter a product name.');
    const li = createProductListItem(name);
    productList.appendChild(li);
    productInput.value = '';
    productInput.focus();
});

productList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    if (e.target.classList.contains('delete')) {
        li.remove();
        if (currentlyEditing === li) {
            currentlyEditing = null;
        }
        return;
    }
    if (e.target.classList.contains('edit')) {
        startInlineEdit(li);
    }
});

function startInlineEdit(li) {
    if (currentlyEditing && currentlyEditing !== li) {
        finishInlineEdit(currentlyEditing);
    }

    const nameWrap = li.querySelector('.editable');
    const currentText = nameWrap.textContent;
    li.classList.add('editing');

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inline-edit';
    input.value = currentText;
    nameWrap.textContent = '';
    nameWrap.appendChild(input);
    input.focus();
    input.setSelectionRange(0, input.value.length);

    currentlyEditing = li;
    input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            finishInlineEdit(li);
        } else if (ev.key === 'Escape') {
            cancelInlineEdit(li, currentText);
        }
    });
}
function finishInlineEdit(li) {
    const nameWrap = li.querySelector('.editable');
    const input = nameWrap.querySelector('input.inline-edit');
    if (!input) {
        li.classList.remove('editing');
        currentlyEditing = null;
        return;
    }
    const newVal = input.value.trim() || 'Untitled Product';
    nameWrap.textContent = newVal;
    li.classList.remove('editing');
    currentlyEditing = null;
}
function cancelInlineEdit(li, originalText) {
    const nameWrap = li.querySelector('.editable');
    const input = nameWrap.querySelector('input.inline-edit');
    if (!input) return;
    nameWrap.textContent = originalText;
    li.classList.remove('editing');
    currentlyEditing = null;
}

document.addEventListener('click', (e) => {
    if (!currentlyEditing) return;
    if (currentlyEditing.contains(e.target)) return;
    finishInlineEdit(currentlyEditing);
});

productList.addEventListener('focusout', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    setTimeout(() => {
        const input = li.querySelector('input.inline-edit');
        if (input) finishInlineEdit(li);
    }, 0);
});