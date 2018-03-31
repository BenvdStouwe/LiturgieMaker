import { Time } from '@angular/common';

import { ILiturgieItem } from './liturgie-item';

export class Liturgie {
  titel: string;
  aanvangsDatum: Date;
  aanvangsTijd: Time;
  publicatieDatum: Date;

  id: number;
  items: ILiturgieItem[];

  constructor(titel: string, aanvangsDatum: Date) {
    this.titel = titel;
    this.aanvangsDatum = aanvangsDatum;
    this.aanvangsTijd = <Time>{ hours: 9, minutes: 30 };
    this.items = new Array<ILiturgieItem>();
  }

  getItems() {
    return this.items;
  }

  addItem(item: ILiturgieItem, index?: number) {
    this.items.push(item);
  }
}
