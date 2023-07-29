export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/main.css"],
	app: {
		head: {
			title: "Nitrogen - $NITRO",
			meta: [
				{
					name: "description",
					content:
						"Nitrogen is a hyper-deflationary token with 0% trade taxes. The first new idea since SafeMoon.",
				},
				{
					name: "keywords",
					content:
						"nitrogen, nitro, token, crypto, cryptocurrency, deflationary, hyper-deflationary, safemoon",
				},
				{ name: "theme-color", content: "#18181b" },
				{ name: "color-scheme", content: "dark" },
				{ property: "og:image", content: "/logo.png" },
				{ property: "og:title", content: "Nitrogen - $NITRO" },
				{
					property: "og:description",
					content:
						"Nitrogen is a hyper-deflationary token with 0% trade taxes. The first new idea since SafeMoon.",
				},
				{ property: "og:url", content: "https://nitrogen.app" },
			],
		},
	},
});
