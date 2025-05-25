<script setup lang="ts">
import { BookOpenIcon, MegaphoneIcon, ListBulletIcon } from "@heroicons/vue/24/solid";

const documents = [
	{
		name: "Cahier des charges fonctionnel n°1",
		description: "Cahier des charges rendu en Octobre 2024. Il développe les premières idées du projet.",
		href: "/documents/cdcf-1.pdf",
		icon: BookOpenIcon,
	},
	{
		name: "Cahier des charges technique",
		description: "Cahier des charges technique réalisé au début du projet, et rendu en Octobre 2024.",
		href: "/documents/cdct.pdf",
		icon: BookOpenIcon,
	},
	{
		name: "Rapport de soutenance n°1",
		description: "Ce rapport présente les tâches réalisées depuis la validation du cahier des charges.",
		href: "/documents/rapport-1.pdf",
		icon: MegaphoneIcon,
	},
	{
		name: "Rapport de soutenance n°2",
		description: "Ce rapport présente les tâches réalisées depuis la première soutenance.",
		href: "/documents/rapport-2.pdf",
		icon: MegaphoneIcon,
	},
	{
		name: "Rapport de soutenance n°3",
		description:
			"Cet ultime rapport de soutenance agit comme une rétrospective sur le projet.",
		href: "/documents/rapport-3.pdf",
		icon: MegaphoneIcon,
	},
    	{
		name: "Dossier d'exploitation",
		description:
			"Le dossier d'exploitation comprend un manuel d'installation, de désinstallation, et d'utilisation.",
		href: "/documents/exploit.pdf",
		icon: BookOpenIcon,
	},
];
</script>

<template>
	<div class="bg-[#18181b] h-screen flex flex-col font-pixelify overflow-x-hidden">
		<Navbar />

		<div class="py-24 space-y-20">
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-[#7f5381] text-center w-full">Documents</h2>

			<div class="grid max-w-5xl grid-cols-1 gap-5 px-8 mx-auto lg:grid-cols-2">
				<a target="_blank" :href v-for="{ description, name, icon, href } in documents">
					<Card :description :name :icon color="purple" />
				</a>
			</div>
		</div>
	</div>
</template>
