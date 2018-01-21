import { ILiturgieItem } from './liturgie-item';
import { Time } from '@angular/common';

export class Liturgie {
  public naam: string;
  public aanvangsDatum: Date;
  public aanvangsTijd: Time;

  private id: number;
  private items: ILiturgieItem[];

  constructor(naam: string, aanvangsDatum: Date) {
    this.naam = naam;
    this.aanvangsDatum = aanvangsDatum;
    this.aanvangsTijd = <Time>{ hours: 9, minutes: 30 };
    this.items = new Array<ILiturgieItem>();
  }

  public getItems() {
    return this.items;
  }

  public addItem(item: ILiturgieItem, index?: number) {
    this.items.push(item);
  }
}
