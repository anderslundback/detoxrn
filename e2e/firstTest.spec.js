describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a wrapper', async () => {
    await expect(element(by.id('wrapper'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello Detox!'))).toBeVisible();
  });
});
