/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app.vue", "./src/**/*.vue"],
	safelist: ["lg:col-span-2", "lg:col-span-1"],
	plugins: [],
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
				text: "text 8s ease infinite",
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

				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			geist: ["geist", "sans-serif"],
		},
	},
};
