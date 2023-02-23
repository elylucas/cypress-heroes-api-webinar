import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    env: {
      // requestMode: true,
      hideCredentials: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
