var fs      = require('fs');
var postcss = require('postcss');
var input   = 'input.css';
var output  = 'output.css';

require('postcss')([
	require('postcss-cssnext')(),
	require('autoprefixer'),
	require('cssnano')
]).process(fs.readFileSync(input), {
	from: input,
	to: output
}).then(function (result) {
	fs.writeFileSync(output, result.css);
});
