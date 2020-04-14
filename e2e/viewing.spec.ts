import { by, device, expect, element, waitFor } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

describe('Viewing Pokemon', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it('should display the home screen on start', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should have a list of Pokemon', async () => {
    await expect(element(by.id('pokemon-list'))).toBeVisible();
  });

  it('should take me to a pokemon details screen when tapped', async () => {
    await element(by.id('list-cinderace')).tap();
    await expect(element(by.id('cinderace-details'))).toBeVisible();
  });

  it('should take me back to the home screen on tapping back', async () => {
    await element(by.id('header-back')).tap();
    await expect(element(by.id('pokemon-list'))).toBeVisible();
  });
});
