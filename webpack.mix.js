// webpack.mix.js

let mix = require('laravel-mix');

mix.webpackConfig({
	output: {
		library: 'jsHelpers',
	},
});

mix.js('src/js-helpers.js', 'dist')
	.sourceMaps();