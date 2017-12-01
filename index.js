
module.exports = function (target, opts) {

  var fs = require('fs'),
      path = require('path'),
      isValid = path.isAbsolute,
      format = ' ({n})'; // so if old name is file.png, the new name should become something like 'file (1).png'

  var inc = 1; // start the increment from

  format = (opts && opts.format) || format;

  function fileExists(url) {
    try {
      fs.accessSync(url, fs.R_OK);
      return true;
    } catch(e) {
      return false;
    }
  }

  function newName() {
    var parsed = path.parse(target); // always do it on original path
    parsed.name += format.replace('{n}', inc++);
    delete parsed.base; // needed for name + ext to take effect. https://nodejs.org/api/path.html#path_path_format_pathobject
    return path.format(parsed);
  }

  function getNewName(file) {
    if(fileExists(file)) {
      return getNewName( newName() ); // recursive
    } else {
      return file;
    }
  }

  if(!target || !isValid(target)) {
    throw new Error('file-saveAble requires first argument to be a valid path.');
  }

  return getNewName(target);
};
