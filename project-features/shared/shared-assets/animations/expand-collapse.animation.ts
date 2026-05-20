import { animate, state, style, transition, trigger } from '@angular/animations';

export const expandCollapseAnimation = trigger('expandCollapse', [
  state(
    'collapsed',
    style({
      height: '0px',
      opacity: 0,
      overflow: 'hidden',
      transform: 'translateY(-6px)',
    })
  ),

  state(
    'expanded',
    style({
      height: '*',
      opacity: 1,
      overflow: 'hidden',
      transform: 'translateY(0)',
    })
  ),

  transition('collapsed => expanded', [
    style({
      height: '0px',
      opacity: 0,
      transform: 'translateY(-6px)',
      overflow: 'hidden',
    }),
    animate(
      '220ms ease-out',
      style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),

  transition('expanded => collapsed', [
    style({
      height: '*',
      opacity: 1,
      transform: 'translateY(0)',
      overflow: 'hidden',
    }),
    animate(
      '180ms ease-in',
      style({
        height: '0px',
        opacity: 0,
        transform: 'translateY(-6px)',
      })
    ),
  ]),
]);
