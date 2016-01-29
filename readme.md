# Basic Gulp Project
### Used modules:
  - gulp-connect
  - browserify (+ vinyls-source-stream)
  - gulp-uglify
  - gulp-rename
  - gulp-sass
  - gulp-autoprefixer
  - gulp-uncss
  - gulp-minify-css

###  Workflow
  1. Dev (Default). In folder 'dev'.
    * run server
    * copy html
    * compile sass
    * browserify (concat js with dependencies)
    * copy everything to ./dev
    * watching (browser livereload)

  2. Dist. In folder 'dist'.
    * run server
    * copy html
    * compile sass
    * uncss (delete unused classes)
    * minify css
    * browserify (concat js with dependencies)
    * uglify(compress) js
    * copy everything to ./dist
    * watching (browser livereload)
