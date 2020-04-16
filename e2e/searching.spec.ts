import { by, device, expect, element, waitFor } from 'detox';

describe('Searching Pokemon', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
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
