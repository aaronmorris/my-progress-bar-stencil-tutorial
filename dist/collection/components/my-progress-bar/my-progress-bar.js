export class MyProgressBar {
    render() {
        return (h("h1", null, "Hello"));
    }
    static get is() { return "my-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:my-progress-bar:**/"; }
}
