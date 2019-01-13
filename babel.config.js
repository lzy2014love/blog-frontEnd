module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: false,
        targets: {
          browsers: ['> 10%', 'last 2 versions', 'not ie <= 11'],
        },
      },
    ],
  ],
}
