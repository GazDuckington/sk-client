import { browser } from '$app/env';
import { writable } from 'svelte/store';

// ** dark theme switcher
export const theme = writable((browser && localStorage.getItem('theme')) || 'dark');

theme.subscribe((val) => browser && localStorage.setItem('theme', val));

export default theme;

//
export const logprior = writable((browser && localStorage.getItem('logprior')) || '');

logprior.subscribe((val) => browser && localStorage.setItem('logprior', val));

//
export const loglikelihood = writable(browser && localStorage.getItem('loglikelihood'));

loglikelihood.subscribe(
	(val) => browser && localStorage.setItem(`loglikelihood`, JSON.stringify(val))
);
