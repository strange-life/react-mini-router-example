import * as reactPlugin from 'vite-plugin-react';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  base: '/react-mini-router-example',
  outDir: 'docs',
  jsx: 'react',
  plugins: [reactPlugin],
};

export default config;
