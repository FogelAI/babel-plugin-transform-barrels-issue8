const babelJest = require("babel-jest").default;

module.exports = {
  process(sourceText, sourcePath, options) {
    const alias = options?.config?.moduleNameMapper;
    const extensions = options.config.moduleFileExtensions;
    const modulesDirs = options.config.moduleDirectories;
    const babelTransformer = babelJest.createTransformer({
      presets: [["next/babel"]],
      plugins: [
        [
          require("babel-plugin-transform-barrels"),
          {
            executorName: "jest",
            alias: alias,
            extensions: extensions,
            modulesDirs: modulesDirs,
            logging: { type: "file" }
          }
        ]
      ],
      babelrc: false,
      configFile: false
    });
    return babelTransformer.process(sourceText, sourcePath, options);
  }
};