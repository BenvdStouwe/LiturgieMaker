import { ILiturgieItem } from './liturgie-item';

export interface ILiturgie {
  titel: string;
  aanvangsDatum: Date;
  publicatieDatum: Date;

  id: number;
  items: ILiturgieItem[];
}

export class Liturgie implements ILiturgie {
  titel: string;
  aanvangsDatum: Date;
  publicatieDatum: Date;

  id: number;
  items: ILiturgieItem[];

  constructor(liturgie: ILiturgie) {
    this.id = liturgie.id;
    this.titel = liturgie.titel;
    this.aanvangsDatum = new Date(liturgie.aanvangsDatum);
    this.publicatieDatum = new Date(liturgie.publicatieDatum);
    this.items = liturgie.items;
  }

  getItems() {
    return this.items;
  }

  addItem(item: ILiturgieItem, index?: number) {
    this.items.push(item);
  }
}
