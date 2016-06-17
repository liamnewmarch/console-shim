import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  dest: 'console-shim.min.js',
  entry: 'console-shim.es6.js',
  exports: 'default',
  format: 'iife',
  moduleName: 'console',
  plugins: [buble(), uglify()]
}
