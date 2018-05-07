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
	transition('hide => show', animate('400ms 400ms ease-in')),
	transition('show => hide', animate('400ms ease-out'))
]);