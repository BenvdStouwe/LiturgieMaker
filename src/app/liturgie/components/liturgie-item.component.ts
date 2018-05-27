import { Component, OnInit, Input } from '@angular/core';
import { Liturgie } from '../model/liturgie';
import { RoutingNames } from '../../common/model/routingnames';
import * as moment from 'moment';

@Component({
  selector: 'app-liturgie-item',
  templateUrl: './liturgie-item.component.html'
})
export class LiturgieItemComponent {
  @Input() liturgie: Liturgie;
  routingNames = RoutingNames;

  gepubliceerd(publicatiedatum: moment.Moment): boolean {
    return publicatiedatum <= moment();
  }
}
