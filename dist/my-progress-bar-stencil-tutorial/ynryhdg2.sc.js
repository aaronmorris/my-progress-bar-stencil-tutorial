/*! Built with http://stenciljs.com */
const{h:e}=window.MyProgressBarStencilTutorial;class t{constructor(){this.max=100}render(){return this.element.style.setProperty("--current-value",this.value.toString()),this.element.style.setProperty("--max-value",this.max.toString()),e("div",{class:"progress-container"},e("div",{class:"progress-bar"}," "),e("div",{class:"progress-bar-reminder"}))}static get is(){return"my-progress-bar"}static get encapsulation(){return"shadow"}static get properties(){return{element:{elementRef:!0},max:{type:Number,attr:"max"},value:{type:Number,attr:"value"}}}static get style(){return"\@charset \"UTF-8\";[data-my-progress-bar-host]   .progress-container[data-my-progress-bar]{display:-webkit-box;display:-ms-flexbox;display:flex;height:var(--progress-height,20px);background:var(--progress-background,#d3d3d3);overflow:hidden;border-radius:20px}[data-my-progress-bar-host]   .progress-container[data-my-progress-bar]   .progress-bar[data-my-progress-bar]{background:var(--progress-color,#add8e6);width:calc(var(--current-value,0) * 100% / var(--max-value,100))}[data-my-progress-bar-host]   .progress-container[data-my-progress-bar]   .progress-bar-reminder[data-my-progress-bar]{-webkit-box-flex:1;-ms-flex:1;flex:1}"}}export{t as MyProgressBar};