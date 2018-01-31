var compressor = require('node-minify');

compressor.minify({
  compressor: 'uglifyjs',
  input: 'src/index.js',
  output: 'dist/adloader.js',
  options: {
    warnings: true, // pass true to display compressor warnings.
    mangle: true,// pass false to skip mangling names.
    output: {}, // pass an object if you wish to specify additional output options. The defaults are optimized for best compression.
    compress: true // pass false to skip compressing entirely. Pass an object to specify custom compressor options.
  },
  callback: function (err, min) {
    if(!err){
      console.log('Minification and build success.');
    } else {
      console.warn('Something went wrong');
    }
  }
});
