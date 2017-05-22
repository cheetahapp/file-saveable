var should = require('chai').should();
var saveAble = require('../index.js');

describe('file-saveAble', function(){

  it('should be a function.', function(){
      saveAble.should.be.a('function');
  });

  it('should require first argument', function(){
    saveAble.should.Throw;
  });

  it('should require first argument to be a valid path', function(){
    saveAble('hello').should.Throw;
  });

  it('should accept first argument if its a valid path', function(){
    saveAble('/this/is/a/path').should.not.Throw;
  });

  it('should return the same path if it does not exist', function(){
    saveAble('/this/is/a/path').should.equal('/this/is/a/path');
  });

  it('should return new file path', function(){
    saveAble('./test/test-files/file.ext').should.equal('./test/test-files/file (1).ext');
    saveAble('./test/test-files/file-2.ext').should.equal('./test/test-files/file-2 (2).ext'); // because (1) is already there
  });

  it('should apply options', function(){
    saveAble('./test/test-files/file.ext', {
      format: '-with-number-{n}'
    }).should.equal('./test/test-files/file-with-number-1.ext');
  });

});
