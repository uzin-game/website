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
		name: "Plan de soutenance n°1",
		description:
			"Le plan de soutenance liste les différents aspects du projet évoqués au cours de notre présentation.",
		href: "/documents/plan-1.pdf",
		icon: ListBulletIcon,
	},
	{
		name: "Rapport de soutenance n°2",
		description: "Ce rapport présente les tâches réalisées depuis la première soutenance.",
		href: "/documents/rapport-2.pdf",
		icon: MegaphoneIcon,
	},
	{
		name: "Plan de soutenance n°2",
		description:
			"Le plan de soutenance liste les différents aspects du projet évoqués au cours de notre présentation.",
		href: "/documents/plan-2.pdf",
		icon: ListBulletIcon,
	},
];
</script>

<template>
	<div class="bg-[#18181b] h-screen flex flex-col font-pixelify overflow-x-hidden">
		<Navbar />

		<div class="py-24 space-y-20">
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-[#7f5381] text-center w-full">Documents</h2>

			<div class="grid grid-cols-1 px-8 lg:grid-cols-2 max-w-5xl mx-auto gap-5">
				<a target="_blank" :href v-for="{ description, name, icon, href } in documents">
					<Card :description :name :icon color="purple" />
				</a>
			</div>
		</div>
	</div>
</template>
