<script setup lang="ts">
const items = ["Home", "About", "Contact", "Community", "Coins"];
</script>

<template>
	<div class="lg:w-9/12 mx-auto h-20 w-11/12">
		<div class="py-5 flex flex-row items-center justify-between">
			<img src="/logo.svg" />

			<div class="lg:flex flex-row gap-8 tracking-wide hidden text-white">
				<div v-for="item in items">
					<p class="transition-colors cursor-pointer hover:text-purple-400">{{ item }}</p>
				</div>
			</div>

			<button
				type="button"
				class="focus:outline-none transition-colors text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 ring-2 ring-purple-600 ring-opacity-70"
			>
				Log in
			</button>
		</div>
	</div>
</template>
