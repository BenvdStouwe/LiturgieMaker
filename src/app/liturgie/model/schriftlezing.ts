import { ILiturgieItem } from './liturgie-item';

export class Schriftlezing implements ILiturgieItem {
  public index: number;
  public boek: string;
  public hoofdstuk: number;
  public verzen: number[];

}
