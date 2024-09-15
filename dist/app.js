"use strict";
class ProjectInput {
    constructor() {
        this.templateEl = document.getElementById("project-input");
        this.hostInput = document.getElementById("app");
        const el = document.importNode(this.templateEl.content, true);
        this.element = el.firstElementChild;
        this.element.id = "user-input";
        this.titleEl = this.element.querySelector("#title");
        this.descEl = this.element.querySelector("#description");
        this.peopleEl = this.element.querySelector("#people");
        this.Configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleEl.value);
    }
    Configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostInput.insertAdjacentElement("afterbegin", this.element);
    }
}
const prIn = new ProjectInput();
//# sourceMappingURL=app.js.map