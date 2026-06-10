import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,

  timeout: 30000,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://6a28cddb4e1e783349a602f6.mockapi.io/api/v1',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  }
});