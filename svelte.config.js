const { asMarkupPreprocessor } = require('svelte-as-markup-preprocessor');
const sveltePreprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex');
const { svelteTrim } = require('svelte-trim');

module.exports = {
	preprocess: [asMarkupPreprocessor([sveltePreprocess(), mdsvex()]), svelteTrim()],
};
