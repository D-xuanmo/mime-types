import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json'
import json from '@rollup/plugin-json'

export default [
	{
		input: 'index.js',
		output: {
			name: 'mimeTypes',
			file: pkg.main,
			format: 'umd'
		},
		external: ['ms'],
		plugins: [
			babel({
				exclude: 'node_modules/**' // 只编译我们的源代码
			}),
			json(),
			uglify(),
			resolve(),
			commonjs()
		]
	}
];
