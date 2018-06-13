export class MyProgressBar {
    constructor() {
        this.max = 100;
    }
    render() {
        this.element.style.setProperty('--current-value', this.value.toString());
        this.element.style.setProperty('--max-value', this.max.toString());
        return (h("div", { class: "progress-container" },
            h("div", { class: "progress-bar" }, " "),
            h("div", { class: "progress-bar-reminder" })));
    }
    static get is() { return "my-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:my-progress-bar:**/"; }
}
