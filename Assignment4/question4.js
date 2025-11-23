class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.renderForm();
    }

    renderForm() {
        let html = "";
        this.fields.forEach(f => {
            html += `
                <label>${f.label}</label>
                <input type="${f.type}" id="${f.label}">
                <br><br>
            `;
        });
        document.getElementById("formContainer").innerHTML = html;
    }

    getFormData() {
        let data = {};
        this.fields.forEach(f => {
            data[f.label] = document.getElementById(f.label).value;
        });
        console.log("Form Data:", data);
        return data;
    }
}

const builder = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
]);