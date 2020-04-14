import { by, device, expect, element, waitFor } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

describe('Home', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it('should display the home screen on start', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should have a list of Pokemon', async () => {
    await expect(element(by.id('pokemon-list'))).toBeVisible();
  });

  it('should have a search bar', async () => {
    await expect(element(by.id('search-bar'))).toBeVisible();
  });

  it('should have a copyright disclaimer', async () => {
    await expect(element(by.id('copyright-disclaimer'))).toBeVisible();
  });
});
