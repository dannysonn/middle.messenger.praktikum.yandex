import { Indexed } from './Store';
import { merge } from './Merge';

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown,
): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  // @ts-ignore
  if (path === 'localChat' && value.type !== 'message') {
    // @ts-ignore
    object.localChat = {};
  }
  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any,
  );
  return merge(object as Indexed, result);
}
