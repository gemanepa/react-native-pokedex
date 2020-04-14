import { by, device, expect, element, waitFor } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

describe('Searching Pokemon', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it('should display the home screen on start', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should have a search bar', async () => {
    await expect(element(by.id('search-bar'))).toBeVisible();
  });

  it('should update the list based on my search', async () => {
    await element(by.id('search-bar')).typeText('chu');
    await expect(element(by.id('list-pikachu'))).toBeVisible();
    await expect(element(by.id('list-raichu'))).toBeVisible();
    await expect(element(by.id('list-pichu'))).toBeVisible();
    await expect(element(by.id('list-cinderace'))).toBeNotVisible();
  });

  it('should update the list if I delete all characters', async () => {
    await element(by.id('search-bar')).clearText();
    await expect(element(by.id('list-grookey'))).toBeVisible();
  });
});
