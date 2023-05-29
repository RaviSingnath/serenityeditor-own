import { sveltekit } from '@sveltejs/kit/vite';
import icons from 'unplugin-icons/vite';
import kitDocs from '@svelteness/kit-docs/node';
import WindiCSS from 'vite-plugin-windicss/dist/index.mjs';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    WindiCSS(),
    icons({ compiler: 'svelte' }),
    kitDocs(),
    sveltekit()
  ],
};

export default config;
