module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    // Este plugin arregla el error de los archivos .js que ves en la terminal
    [
      'babel-plugin-replace-import-extension',
      {
        extMapping: {
          '.js': '.ts',
        },
      },
    ],
  ],
};