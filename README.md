## file-saveable

NodeJS module that returns a path for file to save.
It works similar to how browser determines the file name for new downloads.

E.g.:

> If 'file.png' already exists in that directory then it would return 'file (1).png'


- Install

```
npm i file-saveable -S
```

- Require

```javascript
var saveAble = require('file-saveable');
```

- Call

```javascript
var newPath = saveAble('/path/to/file.ext');
// If 'file.ext' already exists in '/path/to/' then it would return 'file (1).ext' and so on.
```


### Usage

```javascript
var saveAble = require('file-saveable');
saveAble(targetPath, options); // returns the new path
```

- `targetPath` _(string)_ is required parameter and should be a valid, existing path. `Error` will be thrown otherwise.

- `options` _(object)_, Only accepts `format` for now.
  - `format` _(string)_, Default:` ({n})`: The string that you want to append to new file name, before file extension.
  It should contain `{n}` which will be replaced by the number incremented for the file.
  E.g: `-{n}`
  > If 'file.ext' already exists then it would return 'file-1.ext' and so on.
