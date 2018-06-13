const sass = require('@stencil/sass');

exports.config = {
    namespace: 'my-progress-bar-stencil-tutorial',
    generateDistribution: true,
    generateWWW: false,
    bundles: [{ components: ['my-progress-bar']}],
    plugins: [ sass()]
};