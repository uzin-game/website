<script setup lang="ts">
const borderImage = ref("linear-gradient(transparent, transparent)");

const leave = () => {
	borderImage.value = "linear-gradient(transparent, transparent)";
};

const move = (e: MouseEvent) => {
	const target = e.target as HTMLElement;

	const rect = target.getBoundingClientRect();

	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	borderImage.value = `radial-gradient(20% 75% at ${x}px ${y}px, rgb(147 51 234) 0, rgb(147 51 234) 50%, transparent 100%)`;
};

defineProps<{
	name: string;
	description: string;
	image: string;
	width: string;
	style: string;
}>();
</script>

<template>
	<div
		class="relative rounded-lg w-auto border-double border-2 h-[320px] overflow-hidden border-transparent duration-100 bg-origin-border bg-[#202023] bg-opacity-30 hover:bg-[#27272a] transition-all border-element"
		@mouseleave="leave"
		@mousemove="move"
	>
		<div class="p-6">
			<div class="flex flex-col gap-y-1">
				<p class="text-2xl font-medium text-white">{{ name }}</p>
				<p class="text-lg text-gray-400">{{ description }}</p>
			</div>

			<img :style="style" class="rounded-tr-none absolute" :src="image" />
		</div>
	</div>
</template>

<style scoped lang="css">
.border-element:hover {
	background-image: linear-gradient(#27272a, #27272a), v-bind(borderImage);
	background-clip: content-box, border-box;
}
</style>
