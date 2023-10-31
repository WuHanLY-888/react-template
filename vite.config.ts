import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleImport, { AntdResolve } from 'vite-plugin-style-import';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    // styleImport({
    //   resolves: [
    //     AntdResolve()
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}));
