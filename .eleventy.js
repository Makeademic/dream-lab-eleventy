module.exports = function (eleventyConfig) {
    // setup markdown to use emoji plugin
  const markdownItEmoji = require("markdown-it-emoji");
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItEmoji));
  
  eleventyConfig.setBrowserSyncConfig({
      files: './public/static/**/*.css',
    });
  
    return {
      dir: {
        input: 'src',
        output: 'public',
      },
    };
  };    