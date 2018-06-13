// MyProgressBarStencilTutorial: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './my-progress-bar-stencil-tutorial.core.js';
import {
  MyProgressBar
} from './my-progress-bar-stencil-tutorial.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyProgressBar
  ], opts);
}