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
	transition('hide => show', animate('400ms 50ms ease-in')),
	transition('show => hide', animate('500ms 0ms ease-out')),
]);


export const toggleOpacity = trigger('toggleOpacity', [
	state('hide', style({
	    height: '0px',
	    opacity: '0',
	    overflow: 'hidden',
	    display: 'none'
	})),
	state('show', style({
	    height: '*',
	    opacity: '1',
	    display: 'block'
	})),
	transition('hide => show', animate('600ms 0ms ease-in')),
	transition('show => hide', animate('600ms 0ms ease-out')),
]);
