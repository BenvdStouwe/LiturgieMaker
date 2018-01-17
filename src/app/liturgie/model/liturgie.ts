import { ILiturgieItem } from './liturgie-item';

export class Liturgie {
  public naam: string;
  public aanvangsDatum: Date;

  private id: number;
  private items: ILiturgieItem[];

  constructor(naam: string, aanvangsDatum: Date) {
    this.naam = naam;
    this.aanvangsDatum = aanvangsDatum;
    this.items = new Array<ILiturgieItem>();
  }

  public getItems() {
    return this.items;
  }

  public addItem(item: ILiturgieItem, index?: number) {
    this.items.push(item);
  }
}
