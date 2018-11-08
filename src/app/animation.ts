import { trigger, state, style, transition, animate } from '@angular/core';

export const toggleHeight = trigger('toggleHeight', [
	state('hide', style({
	    height: '0px',
	    opacity: '0',
	    overflow: 'hidden',
	    // display: 'none'
	})),
	state('show', style({
	    height: '*',
	    opacity: '1',
	    // display: 'block'
	})),
	transition('hide => show', animate('200ms 50ms ease-in')),
	transition('show => hide', animate('800ms ease-out')),
]);
