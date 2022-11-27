import { expect } from 'chai';
import { store } from './Store';

describe('Store property setting', () => {
  it('should set property', () => {
    store.set('value', 5);
    expect(store.getState().value, '5');
  });
});
