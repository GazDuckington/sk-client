import { writable } from 'svelte/store';
const options = writable(localStorage.getItem('settings') || '');

options.subscribe((val) => localStorage.setItem('settings', val));

export default options;
