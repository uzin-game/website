/** @type {import('tailwindcss').Config} */
export const content = ["./app.vue", "./src/**/*.vue"];
export const safelist = ["lg:col-span-2", "lg:col-span-1"];
export const plugins = [];
export const theme = {
	fontFamily: {
		poppins: ["Poppins", "sans-serif"],
		geist: ["geist", "sans-serif"],
	},
};
