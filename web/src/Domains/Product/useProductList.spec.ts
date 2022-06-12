/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react-hooks';
import useProductList from './useProductList';
import * as PRODUCT_MOCKUP from './product-mock-up.json';

describe('useProductList', () => {
  test('Before api call, it should get empty product list', async () => {
    const { result } = renderHook(() => useProductList({}));

    expect(result.current).toStrictEqual([]);
  });
  test('it should get product list success', async () => {
    const { result, waitForValueToChange } = renderHook(() => useProductList({}));

    await waitForValueToChange(() => result.current);
    expect(result.current).toStrictEqual(PRODUCT_MOCKUP);
  });
});
