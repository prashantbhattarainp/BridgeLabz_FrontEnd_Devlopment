const textarea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

function updateCounter() {
    const used = textarea.value.length;
    const left = MAX - used;
    counter.textContent = `${left} characters left`;

    counter.classList.remove('ok', 'warn', 'danger');
    if (left <= 0) {
        counter.classList.add('danger');
        counter.textContent = '0 characters left — limit reached';
    } else if (left <= 20) {
        counter.classList.add('warn');
    } else {
        counter.classList.add('ok');
    }
}

textarea.addEventListener('keydown', (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Home', 'End'];
    const currentLen = textarea.value.length;

    if (allowedKeys.includes(e.key)) return;

    const selectionLength = textarea.selectionEnd - textarea.selectionStart;
    if (currentLen - selectionLength >= MAX) {

        e.preventDefault();
    }
});

textarea.addEventListener('input', () => {

    if (textarea.value.length > MAX) {
        textarea.value = textarea.value.slice(0, MAX);
    }
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    textarea.value = '';
    updateCounter();
});

updateCounter();