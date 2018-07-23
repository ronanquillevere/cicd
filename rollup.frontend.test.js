// Rollup plugins
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
    input: 'test/client/**/*.js',
    output: {
        file: 'test/transpiled/client/tests.js',
        format: 'es',
        sourcemap: false
    },
    plugins: [
        multiEntry(),
        babel(babelrc())
    ]
};
