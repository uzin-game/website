<script setup lang="tsx">
import { NuxtLink } from "#components";
import { Bars3Icon, HomeIcon, UserGroupIcon, DocumentDuplicateIcon } from "@heroicons/vue/24/solid";

const items = [
	{ name: "Accueil", icon: HomeIcon, url: "/" },
	{ name: "Équipe", icon: UserGroupIcon, url: "/team" },
	{ name: "Documents", icon: DocumentDuplicateIcon, url: "/documents" },
];

const menuVisibility = ref(false);

const Menu = () => {
	return items.map((item) => (
		<NuxtLink
			to={item.url}
			class="flex transition-colors cursor-pointer flex-row hover:text-purple-400 items-center space-x-1.5"
		>
			<item.icon class="w-5 h-5" />
			<p>{item.name}</p>
		</NuxtLink>
	));
};

const Button = () => {
	return (
		<button
			type="button"
			class="px-4 py-2 mb-2 text-sm font-medium text-white transition-colors rounded-lg lg:block focus:outline-none hover:bg-[#7f5381] focus:ring-4 focus:ring-purple-300 ring-2 ring-[#eb86cd] ring-opacity-70"
		>
			Jouer
		</button>
	);
};
</script>

<template>
	<div class="w-11/12 h-20 mx-auto lg:w-9/12 bg-blur">
		<div class="flex flex-row items-center justify-between py-5">
			<img src="/logo.png" class="w-16 shadow-xl h-16" />

			<div class="flex-row hidden gap-8 tracking-wide text-white lg:flex">
				<Menu />
			</div>

			<Button class="hidden" />

			<Bars3Icon @click="menuVisibility = !menuVisibility" class="block text-white lg:hidden w-7 h-7" />
		</div>
	</div>

	<div
		:class="{ 'opacity-100 translate-y-10': menuVisibility }"
		class="absolute z-50 w-10/12 h-auto py-10 lg:hidden transition-all text-center -translate-x-1/2 opacity-0 left-1/2 rounded-3xl bg-[#18181b]"
	>
		<div class="flex flex-col items-center justify-center space-y-6 tracking-wide text-white lg:flex">
			<div class="flex flex-row items-center space-x-2">
				<img class="w-7 h-7" src="/logo.svg" />

				<p class="text-xl font-semibold">Uzin</p>
			</div>

			<div class="space-y-2">
				<Menu />
			</div>

			<Button />
		</div>
	</div>
</template>
