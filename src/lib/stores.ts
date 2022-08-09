import { browser } from '$app/env';
import { writable } from 'svelte/store';

// ** dark theme switcher
export const theme = writable((browser && localStorage.getItem('theme')) || 'dark');

theme.subscribe((val) => browser && localStorage.setItem('theme', val));

export default theme;

// ** logs values
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newLocal: any = browser && localStorage.getItem('logs');

const defaults = JSON.parse(newLocal) || {
	logprior: 0,
	loglikelihood: []
};
const logs = writable(browser && defaults);

logs.subscribe((val) => browser && localStorage.setItem(`logs`, JSON.stringify(val)));

const hasilPred = writable();
hasilPred.subscribe((val) => val);
export { logs };
