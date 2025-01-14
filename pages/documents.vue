<script setup lang="ts">
import { BookOpenIcon, MegaphoneIcon } from "@heroicons/vue/24/solid";

const documents = [
	{
		name: "Cahier des charges fonctionnel #1",
		description:
			"Premier cahier des charges rendu en Octobre 2024. Il comprend l'organisation et les premières idées du projet.",
		href: "cdcf-1.pdf",
		icon: BookOpenIcon,
	},
	{
		name: "Cahier des charges technique",
		description: "Cahier des charges technique réalisé au début du projet, et rendu en Octobre 2024.",
		href: "cdct.pdf",
		icon: BookOpenIcon,
	},
	{
		name: "Rapport soutenance n°1",
		description: "Le rapport de soutenance n°1",
		href: "rapport-1.pdf",
		icon: MegaphoneIcon,
	},
];
</script>

<template>
	<div class="bg-[#18181b] h-screen flex flex-col font-poppins overflow-x-hidden">
		<Navbar />

		<div class="py-24 space-y-20">
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-pink-500 text-center w-full">Documents</h2>

			<div class="grid grid-cols-1 px-8 lg:grid-cols-2 max-w-5xl mx-auto gap-5">
				<a target="_blank" :href v-for="{ description, name, icon, href } in documents">
					<Card :description :name :icon color="pink" />
				</a>
			</div>
		</div>
	</div>
</template>
