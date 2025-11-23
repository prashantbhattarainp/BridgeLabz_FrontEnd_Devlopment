const steps = Array.from(document.querySelectorAll('.step'));
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const summaryContainer = document.getElementById('summaryContainer');

let currentStepIndex = 0;

const nameInput = document.getElementById('nameInput');
const nameError = document.getElementById('nameError');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');

function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle('active', i === index));
    backBtn.disabled = index === 0;
    nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
    summaryContainer.innerHTML = '';
}

function validateName() {
    const val = nameInput.value.trim();
    if (val.length === 0) {
        nameError.textContent = 'Name cannot be empty.';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const val = emailInput.value.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const val = passwordInput.value;
    if (val.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

nextBtn.addEventListener('click', () => {
    const idx = currentStepIndex;
    let ok = false;
    if (idx === 0) ok = validateName();
    else if (idx === 1) ok = validateEmail();
    else if (idx === 2) ok = validatePassword();

    if (!ok) return;

    if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        showStep(currentStepIndex);
    } else {
        showSummary();
    }
});

backBtn.addEventListener('click', () => {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        showStep(currentStepIndex);
    }
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function showSummary() {
    const summaryHTML = `
    <div class="summary">
      <h2>Summary</h2>
      <p><strong>Name:</strong> ${escapeHtml(nameInput.value.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(emailInput.value.trim())}</p>
      <p><strong>Password:</strong> ${'*'.repeat(passwordInput.value.length)}</p>
      <button id="editBtn">Edit</button>
      <button id="submitBtn">Submit</button>
    </div>
  `;
    summaryContainer.innerHTML = summaryHTML;

    document.getElementById('editBtn').addEventListener('click', () => {
        currentStepIndex = 0;
        showStep(currentStepIndex);
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        summaryContainer.innerHTML = '<div class="summary"><h2>Submitted!</h2><p>Form data has been submitted (simulation).</p></div>';
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

showStep(currentStepIndex);