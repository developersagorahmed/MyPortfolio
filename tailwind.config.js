/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		light: {
			primary: "#149ddd",
			secondary: "#151515",
		},
		dark: {
			primary: "#149ddd",
			secondary: "#151515",
		},

		extend: {
			colors: {
				primary: "#149ddd",
			},

			fontFamily: {
				spaceGrotesk: ['Space Grotesk', "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
