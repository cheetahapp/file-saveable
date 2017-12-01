var should = require('chai').should();
var saveAble = require('../index.js');

function getPath(path) {
  return __dirname + '/test-files/' + path
}

describe('file-saveAble', function(){

  it('should be a function.', function(){
      saveAble.should.be.a('function');
  });

  it('should require first argument', function(){
    saveAble.should.throw();
  });

  it('should require first argument to be a valid path', function(){
    (function () {
      saveAble('hello')
    }).should.throw();
  });

  it('should accept first argument if its a valid path', function(){
    (function () {
      saveAble('/this/is/a/path')
    }).should.not.throw();
  });

  it('should return the same path if it does not exist', function(){
    saveAble('/this/is/a/path').should.equal('/this/is/a/path');
  });

  it('should return new file path', function(){
    saveAble(getPath('file.ext')).should.equal(getPath('file (1).ext'));
    saveAble(getPath('file-2.ext')).should.equal(getPath('file-2 (2).ext')); // because (1) is already there
  });

  it('should apply options', function(){
    saveAble(getPath('file.ext'), {
      format: '-with-number-{n}'
    }).should.equal(getPath('file-with-number-1.ext'));
  });

});
