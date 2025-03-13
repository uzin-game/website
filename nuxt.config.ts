import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxt/ui"],
	css: ["~/assets/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},

	app: {
		head: {
			title: "Uzin",
			meta: [
				{
					name: "description",
					content: "Uzin • Un jeu où la gestion rencontre la survie dans un monde hostile et évolutif.",
				},
				{
					name: "keywords",
					content: "uzin,factorio,videogame",
				},
				{ name: "theme-color", content: "#6b32f0" },
				{ name: "color-scheme", content: "dark" },
				{ property: "og:image", content: "/logo.png" },
				{ property: "og:title", content: "Uzin" },
				{
					property: "og:description",
					content: "Un jeu où la gestion rencontre la survie dans un monde hostile et évolutif.",
				},
			],
		},
	},

	compatibilityDate: "2025-01-10",
});
