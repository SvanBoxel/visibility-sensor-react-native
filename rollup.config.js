const typescript = require('rollup-plugin-typescript2');
const pkg = require('./package.json');

export default [
  {
    input: 'src/index.tsx',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: false,
      })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
