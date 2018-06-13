/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyProgressBar {
      'max': number;
      'value': number;
    }
  }

  interface HTMLMyProgressBarElement extends StencilComponents.MyProgressBar, HTMLStencilElement {}

  var HTMLMyProgressBarElement: {
    prototype: HTMLMyProgressBarElement;
    new (): HTMLMyProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    'my-progress-bar': HTMLMyProgressBarElement;
  }
  interface ElementTagNameMap {
    'my-progress-bar': HTMLMyProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-progress-bar': JSXElements.MyProgressBarAttributes;
    }
  }
  namespace JSXElements {
    export interface MyProgressBarAttributes extends HTMLAttributes {
      'max'?: number;
      'value'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;