import { by, device, expect, element, waitFor } from 'detox';
import { reloadApp } from 'detox-expo-helpers';

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });
});
