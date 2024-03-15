import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import {
  __dirname,
  destFolder,
  projectPaths,
  srcFolder,
  noWebpack,
} from "../config/paths.js";
import { logger } from "../config/Logger.js";

const javaScript = async (isDev) => {
  return gulp
    .src([
      `${projectPaths.scriptsSrc}`, // 모든 js, ts, json 파일을 선택
    ])
    .pipe(logger.handleError("JS"))
    .pipe(gulp.dest(destFolder))
    .pipe(plugins.browserSync.stream());
};

export { javaScript };
