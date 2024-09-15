// Code goes here!
class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostInput: HTMLTemplateElement;
  element: HTMLFormElement;
  titleEl: HTMLInputElement;
  descEl: HTMLInputElement;
  peopleEl: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostInput = document.getElementById("app")! as HTMLTemplateElement;
    const el = document.importNode(this.templateEl.content, true);
    this.element = el.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"
    this.titleEl = this.element.querySelector("#title")!;
    this.descEl = this.element.querySelector("#description")!;
    this.peopleEl = this.element.querySelector("#people")!;
    this.Configure()
    this.attach();
  }

  private submitHandler(event:Event) {
    event.preventDefault()
    console.log(this.titleEl.value)
  }

  private Configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this))
  }

  private attach() {
    this.hostInput.insertAdjacentElement("afterbegin", this.element);
  }
}

const prIn = new ProjectInput();
