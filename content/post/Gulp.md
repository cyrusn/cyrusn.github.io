+++
title = "Gulp"
date = "2015-05-10 00:46:47"
tags = ["gulp" ,"javascript"]
+++
# Automate and enhance your workflow

## Example

 watch jsx change and compile

```javascript
// http://travismaynard.com/writing/getting-started-with-gulp
var gulp = require('gulp');
var logger = require('cyrusn-logger');
var react = require('gulp-react');


gulp.task('default', function() {
  console.log("hello world");
});

var sourcePath = './src/Client-React/source/*.jsx';
gulp.task('react', function(){
    return gulp
        .src(sourcePath)
        .pipe(react())
        // to prevent break when meet error
        .on('error', function(err){
            logger.debug(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest('./src/Client-React/dist'));
});

gulp.task('watch', function() {
    gulp.watch(sourcePath, ['react']);
});

gulp.task('default', ['react', 'watch']);
```


# links
[gulp](http://gulpjs.com/)
[Introduction to Gulp.js with practical examples](http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/)
