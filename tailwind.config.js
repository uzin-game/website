/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app.vue", "./src/**/*.vue"],
	safelist: ["lg:col-span-2", "lg:col-span-1"],
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
			},
		},
		fontFamily: {
			roobert: ["roobert", "sans-serif"],
		},
	},
};
