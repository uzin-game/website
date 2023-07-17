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
</script>

<template>
	<div
		class="relative rounded-lg border-double border-2 border-transparent duration-100 bg-origin-border bg-[#202023] hover:bg-[#27272a] transition-all w-96 h-52 border-element"
		@mouseleave="leave"
		@mousemove="move"
	>
		ah
	</div>
</template>

<style scoped lang="css">
.border-element:hover {
	background-image: linear-gradient(#27272a, #27272a), v-bind(borderImage);
	background-clip: content-box, border-box;
}
</style>
