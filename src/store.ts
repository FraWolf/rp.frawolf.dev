// store.js
import { writable } from 'svelte/store';
import type { Buttons, JSONData } from './types/form';

export const jsonFormData = writable<JSONData>({
	discordClientId: '',
	richPresence: {
		state: '',
		details: '',
		bigImageName: '',
		bigImageText: '',
		smallImageName: '',
		smallImageText: '',
		buttons: []
	}
});

export const firstButton = writable<Buttons>({
	label: '',
	url: ''
});

export const secondButton = writable<Buttons>({
	label: '',
	url: ''
});
