import { ILiturgieItem } from './liturgie-item';

export class Schriftlezing implements ILiturgieItem {
  index: number;
  boek: string;
  hoofdstuk: number;
  verzen: number[];
}
