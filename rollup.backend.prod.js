import {eslint} from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es';

export default {
    input: 'src/server/App.js',
    output: {
        file: 'dist/backend.js',
        format: 'umd',
        name: 'app',
        sourcemap : true
    },
    plugins: [
        eslint({
        configFile: ".eslintrc-backend.json"
    }),
        uglify()
    ]
};
