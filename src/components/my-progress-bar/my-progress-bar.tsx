import { Component, Prop, Element } from "@stencil/core";

@Component({
	tag: 'my-progress-bar',
	styleUrl: 'my-progress-bar.scss',
	// This will tell Stencil that we want the content to be wrapped into a “shadow root”, aka use the Shadow DOM API. 
	// If a browser doesn’t support the Shadow DOM yet, Stencil will make sure to use the respective polyfill.
	shadow: true
})

export class MyProgressBar {
	// Any property of the class that is prefixed with the @Prop() decorator will be turned automatically into a property on the custom element. 
	// Stencil will also watch any changes in this value and will cause a re-render by calling render() again. 
	@Prop() value: number;
	@Prop() max: number = 100;

	@Element() element: HTMLElement;
	render() {
		this.element.style.setProperty('--current-value', this.value.toString());
		this.element.style.setProperty('--max-value', this.max.toString());

		return (
			<div class="progress-container">
				<div class="progress-bar"> </div>
				<div class="progress-bar-reminder" />
			</div>
		);
	}
}