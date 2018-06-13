import { Component, Prop } from "@stencil/core";

@Component({
    tag: 'my-progress-bar',
    styleUrl: 'my-progress-bar.scss',
    // This will tell Stencil that we want the content to be wrapped into a “shadow root”, aka use the Shadow DOM API. 
    // If a browser doesn’t support the Shadow DOM yet, Stencil will make sure to use the respective polyfill.
    shadow: true
})

export class MyProgressBar {
    @Prop() value: number;
    @Prop() max: number = 100;
    render() {
        console.log('in render');
        return (
            <h1>Hello</h1>
        )
    }
}