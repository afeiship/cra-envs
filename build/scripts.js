(function () {
  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });
  const tsconfig = require('../tsconfig.json');

  gulp.task('scripts:cjs', function () {
    return gulp
      .src('src/index.ts')
      .pipe($.jswork.pkgHeader())
      .pipe($.typescript({ ...tsconfig.compilerOptions, module: 'commonjs' }))
      .pipe(gulp.dest('dist/cjs'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });

  gulp.task('scripts:esm', function () {
    return gulp
      .src('src/index.ts')
      .pipe($.jswork.pkgHeader())
      .pipe($.typescript({ ...tsconfig.compilerOptions, module: 'esnext' }))
      .pipe(gulp.dest('dist/esm'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });
})();
