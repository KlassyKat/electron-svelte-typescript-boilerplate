import svelte from 'rollup-plugin-svelte';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import sveltePreprocess from 'svelte-preprocess';

export default [{
	input: ['src/main.ts', 'src/renderer.ts', 'src/config/preload.ts'],
	output: {
		dir: 'public/build',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		resolve(),
		svelte({
			preprocess: sveltePreprocess(),
			css: css => {
				css.write('index.css')
			},
		}),
		commonjs(),
		json(),
		typescript(),
        postcss()
	],
	external: [
		'electron',
		'child_process',
		'fs',
		'path',
		'url',
		'module',
		'os'
	]
}];