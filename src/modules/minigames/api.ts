import { MiniGame } from './types';

export function fetchMiniGames(): Promise<Array<MiniGame>> {
  return fetch('/minigames.json').then((it) => it.json());
}
