import {eslint} from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es';

export default {
    input: 'src/client/App.js',
    output: {
        file: 'static/frontend.js',
        format: 'es',
        name: 'app',
        sourcemap : true
    },
    plugins: [
        eslint({
            configFile: ".eslintrc-frontend.json"
        }),
        uglify()
    ]
};
