var path = require('path');
var fixme = require('fixme');

fixme({
  path:                 path.resolve(__dirname, '../src/frontend'),
  ignored_directories:  ['node_modules/**', '.git/**', '.hg/**'],
  file_patterns:        ['**/*.jsx', '**/*.js', '**/*.scss', '**/*.css', 'Makefile', '**/*.sh'],
  file_encoding:        'utf8',
  line_length_limit:    1000,
  skip:                 []
});
