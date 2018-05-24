import { ILiturgieItem } from './liturgie-item';
import * as moment from 'moment';

export interface ILiturgie {
  titel: string;
  aanvangsDatum: moment.Moment;
  publicatieDatum: moment.Moment;

  id: number;
  items: ILiturgieItem[];
}

export class Liturgie implements ILiturgie {
  titel: string;
  aanvangsDatum: moment.Moment;
  publicatieDatum: moment.Moment;

  id: number;
  items: ILiturgieItem[];

  constructor(liturgie: ILiturgie) {
    this.id = liturgie.id;
    this.titel = liturgie.titel;
    this.aanvangsDatum = moment(liturgie.aanvangsDatum);
    this.publicatieDatum = moment(liturgie.publicatieDatum);
    this.items = liturgie.items;
  }

  addItem(item: ILiturgieItem, index?: number) {
    this.items.push(item);
  }

  removeItem(itemToDelete: ILiturgieItem) {
    this.items.forEach((item, index) => {
      if (item === itemToDelete) {
        this.items.splice(index, 1);
        return;
      }
    });
  }
}
