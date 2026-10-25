"use strict";

// Q4: Custom Form Builder
class FormBuilder {
    constructor(fields, hostElement) {
        this.fields = fields;
        this.hostElement = hostElement;
    }

    build() {
        const formFields = this.fields.map((field, index) => {
            const id = `field-${index}`;
            const safeLabel = this.escapeHTML(field.label);
            const type = ["text", "email", "number", "password", "date"].includes(field.type)
                ? field.type
                : "text";
            return `<label for="${id}">${safeLabel}</label>
                    <input id="${id}" name="${this.escapeHTML(field.name)}" type="${type}" ${field.required ? "required" : ""}>`;
        }).join("\n");

        // Field labels/names are escaped before insertion to reduce HTML injection risk.
        this.hostElement.innerHTML = `
            <form id="dynamicForm">
                ${formFields}
                <button type="submit">Submit</button>
            </form>
        `;

        this.hostElement.querySelector("#dynamicForm").addEventListener("submit", event => {
            event.preventDefault();
            const data = this.getFormData();
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
            console.log("Form data:", data);
        });
    }

    getFormData() {
        const form = this.hostElement.querySelector("#dynamicForm");
        const data = {};
        this.fields.forEach((field, index) => {
            const input = form.querySelector(`#field-${index}`);
            data[field.name] = input.value;
        });
        return data;
    }

    escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[char]);
    }
}

const fields = [
    { type: "text", name: "username", label: "Username", required: true },
    { type: "email", name: "email", label: "Email address", required: true },
    { type: "number", name: "age", label: "Age", required: true }
];

const builder = new FormBuilder(fields, document.getElementById("formHost"));
builder.build();
