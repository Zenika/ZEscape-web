import { Adventure } from './types';

export function fetchAdventures(): Promise<Array<Adventure>> {
  return fetch('/api/adventure.json').then((it) => it.json());
}
