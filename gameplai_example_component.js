class GameplaiExampleComponent extends HTMLElement {
    constructor() {
        super();
        const width = this.getAttribute("width") || "100%";
        const height = this.getAttribute("height") || "100%";
        this.innerHTML = `
    <style>
        * {
          position: absolute;
          height: ${height};
          width: ${width};
          border: none;
        }
      </style>
    <iframe src="gameplai_example_component.html"></iframe>
        `;
    }
}

customElements.define('gameplai-example-component', GameplaiExampleComponent);