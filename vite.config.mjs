import path from 'path';

import { defineConfig } from 'vite';


export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',

    rollupOptions: {
    
      input: {
        main: path.resolve(__dirname, './index.html'),
        contact: path.resolve(__dirname, './contact.html'),
        header: path.resolve(__dirname, './header.html'),
        footer: path.resolve(__dirname, './footer.html'),
        blog1: path.resolve(__dirname, './blog1.html'),
        blog2: path.resolve(__dirname, './blog2.html'),
        blog3: path.resolve(__dirname, './blog3.html'),


        // main: './index.html',
        // about: './about.html',
        // contact: './contact.html',
        // header: './header.html',
        // footer: './footer.html',
      },
    },
    
  },
});






