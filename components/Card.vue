<script setup lang="ts">
import type { FunctionalComponent } from "vue";

const props = defineProps<{
	name: string;
	description: string;
	color: string;
	icon: FunctionalComponent;
}>();

const { color } = toRefs(props);

const reset = "linear-gradient(transparent, transparent)";

const borderImage = ref(reset);

const leave = () => {
	borderImage.value = reset;
};

const move = (e: MouseEvent) => {
	const target = e.target as HTMLElement;

	const rect = target.getBoundingClientRect();

	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	if (color.value === "pink") {
		borderImage.value = `radial-gradient(20% 75% at ${x}px ${y}px, rgb(236 72 153) 0, rgb(236 72 153) 50%, transparent 100%)`;
	} else {
		borderImage.value = `radial-gradient(20% 75% at ${x}px ${y}px, rgb(147 51 234) 0, rgb(147 51 234) 50%, transparent 100%)`;
	}
};
</script>

<template>
	<div
		class="relative rounded-lg w-auto border-double border-2 overflow-hidden border-transparent duration-100 bg-origin-border bg-[#29292c] bg-opacity-30 hover:bg-[#27272a] transition-all border-element"
		@mouseleave="leave"
		@mousemove="move"
	>
		<div class="p-6">
			<div class="flex flex-col space-y-2">
				<p class="flex flex-row items-center space-x-2.5">
					<component
						:is="icon"
						:class="color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'"
						class="w-8 h-8 p-[4px] text-white rounded-lg"
					/>
					<span class="text-lg font-medium leading-6 text-white lg:text-xl">{{ name }}</span>
				</p>

				<p class="text-xs text-white text-opacity-80 lg:text-base">{{ description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="css">
.border-element:hover {
	background-image: linear-gradient(#27272a, #27272a), v-bind(borderImage);
	background-clip: content-box, border-box;
}
</style>
