import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  reporter: [['list'], ['html', { outputFolder: 'test-results/html' }]],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
})
