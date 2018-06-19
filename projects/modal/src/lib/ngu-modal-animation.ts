import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';

// export const fadeAnimation = trigger('fadeAnimation', [
//   transition(':enter', [
//     style({ opacity: 0 }),
//     animate('200ms', style({ opacity: 1 }))
//   ]),
//   transition(':leave', [
//     style({ opacity: 1 }),
//     animate('200ms', style({ opacity: 0 }))
//   ])
// ]);

// export const viewAnimation = trigger('viewAnimation', [
//   state('1', style({ transform: 'none', opacity: 1 })),
//   state(
//     'void',
//     style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })
//   ),
//   state('0', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
//   transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
// ]);

export const NguModalFadeAnimation: AnimationTriggerMetadata = trigger(
  'fadeAnimation',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('200ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('200ms', style({ opacity: 0 }))
    ])
  ]
);
export const NguModalViewAnimation: AnimationTriggerMetadata = trigger(
  'viewAnimation',
  [
    state('1', style({ transform: 'none', opacity: 1 })),
    state(
      'void',
      style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })
    ),
    state('0', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
    transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
  ]
);
