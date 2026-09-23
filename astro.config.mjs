import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', site: process.env.SITE_URL || undefined, trailingSlash: 'always', server: { host: '0.0.0.0' }, vite: { server: { allowedHosts: ['terminal.local'] } } });
