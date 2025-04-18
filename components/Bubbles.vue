<script setup lang="tsx">
const baseStyles = "absolute rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-10";

const specificStyles = [
	"top-0 bg-purple-300 left-80",
	"top-0 right-140 bg-violet-800 animation-delay-2000",
	"bg-pink-300 -bottom-8 right-80 animation-delay-4000",
	"bg-indigo-700 -bottom-8 left-120 animation-delay-4000",
];

const Bubble = defineNuxtComponent({
	name: "Bubble",
	props: {
		style: String,
	},
	setup(props) {
		return () => <div class={`${baseStyles} ${props.style}`} />;
	},
});
</script>

<template>
	<Bubble v-for="style in specificStyles" :style="style" />
</template>
