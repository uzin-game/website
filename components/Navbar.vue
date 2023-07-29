<script setup lang="ts">
import { QuestionMarkCircleIcon, LightBulbIcon, PaperAirplaneIcon, LinkIcon } from "@heroicons/vue/24/solid";

const items = [
	{ name: "How does it work?", icon: QuestionMarkCircleIcon, url: "#how" },
	{ name: "Features", icon: LightBulbIcon, url: "#features" },
	{ name: "Twitter", icon: LinkIcon, url: "#twitter" },
	{ name: "Telegram", icon: PaperAirplaneIcon, url: "#telegram" },
];
</script>

<template>
	<div class="w-11/12 h-20 mx-auto lg:w-9/12">
		<div class="flex flex-row items-center justify-between py-5">
			<img src="/logo.svg" />

			<div class="flex-row hidden gap-8 tracking-wide text-white lg:flex">
				<a
					v-for="{ icon, name, url } in items"
					:href="url"
					class="flex transition-colors cursor-pointer flex-row hover:text-purple-400 items-center space-x-1.5"
				>
					<component :is="icon" class="w-6 h-6" />
					<p>{{ name }}</p>
				</a>
			</div>

			<button
				type="button"
				class="px-4 py-2 mb-2 text-sm font-medium text-white transition-colors rounded-lg focus:outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 ring-2 ring-purple-600 ring-opacity-70"
			>
				Buy $NITRO
			</button>
		</div>
	</div>
</template>
