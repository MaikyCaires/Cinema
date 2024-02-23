import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Jogos/', // Adicione esta linha com o caminho do seu repositório
  plugins: [react()],
});
