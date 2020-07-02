import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

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
        objectHashIgnoreUnknownHack: true,
      })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
