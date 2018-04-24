import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(
      ':enter, :leave',
      style({ position: 'absolute', left: 0, right: 0 }),
      {
        optional: true
      }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('200ms ease-in-out', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('200ms ease-in-out', style({ opacity: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
]);
