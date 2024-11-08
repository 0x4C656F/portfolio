import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: ['sunset']
	},
	theme: {
		extend: {
			fontFamily: {
				inter: 'Inter'
			}
		}
	},

	plugins: [daisyui]
} satisfies Config;
