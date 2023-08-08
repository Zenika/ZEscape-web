import { MiniGame } from '../minigames/types';

export type Adventure = {
  id: number;
  title: string;
  description: string;
  time: string;
  minigames?: MiniGame[];
};
