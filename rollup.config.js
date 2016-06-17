import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'console-shim.es6.js',
  dest: 'console-shim.min.js',
  plugins: [buble(), uglify()]
}
