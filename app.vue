<script setup lang="ts">
const cards = [
	{
		name: "Now with Binance",
		description: "Connect your Binance account and explore all the possibilities Nitrogen has to offer!",
		image: "code2.svg",
		width: "col-span-2",
		style: "top: 136px",
	},

	{
		name: "Our new logo!",
		description: "Check it out!",
		image: "logo.svg",
		width: "col-span-1",
		style: "top: 136px; width: 100%;",
	},

	{
		name: "Our new logo!",
		description: "Check it out!",
		image: "logo.svg",
		width: "col-span-1",
		style: "top: 136px; width: 100%;",
	},

	{
		name: "Now with Binance",
		description: "Connect your Binance account and explore all the possibilities Nitrogen has to offer!",
		image: "code2.svg",
		width: "col-span-2",
		style: "top: 136px",
	},
];
</script>

<template>
	<div class="bg-[#18181b] h-full font-roobert overflow-x-hidden">
		<Navbar />

		<div class="mx-center flex flex-col items-center relative justify-center pt-24 lg:pt-32">
			<h1 class="text-3xl lg:text-7xl text-white font-semibold lg:font-medium">The best coin on the planet</h1>

			<h1
				class="text-transparent h-[78px] text-3xl lg:text-7xl font-semibold lg:font-medium bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
			>
				is Nitrogen
			</h1>

			<p class="text-gray-400 text-base px-2 lg:px-0 lg:text-xl lg:mt-5 text-center">
				<span class="text-white font-medium">Create</span> your crypto wallet or import one from Coinbase.
				<span class="text-white font-medium">Share</span> it with the community.<br />
				<span class="text-white font-medium">Get</span> tons of money quickly, risk-free.
			</p>

			<button
				class="relative mt-7 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
			>
				<span
					class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
				>
					Let's go!
				</span>
			</button>

			<div class="z-10">
				<Bubbles />
			</div>
		</div>

		<div class="py-16">
			<div
				class="card relative rounded-3xl mx-auto w-11/12 lg:w-8/12 h-[200px] lg:h-[320px] overflow-hidden py-5 lg:py-10 px-10"
			>
				<div class="flex flex-row items-center justify-center">
					<div class="flex flex-col items-center text-xs text-center lg:text-base text-white">
						<p class="font-semibold text-xl lg:text-3xl tracking-tight">Now with a dedicated editor</p>
						<p>It has never been this easy to modify the blockchain.</p>
						<p>I have no idea what I'm talking about...</p>
					</div>

					<img class="rounded-tr-none absolute top-24 lg:top-36" src="/code.svg" />
				</div>
			</div>
		</div>

		<div class="w-8/12 pb-20 mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div v-for="card in cards" :class="'lg:' + card.width">
					<Card
						:name="card.name"
						:description="card.description"
						:image="card.image"
						:width="card.width"
						:style="card.style"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="css">
.card {
	background-color: #fd99ff;
	background-image: radial-gradient(at 98% 0%, hsla(244, 95%, 61%, 1) 0px, transparent 50%),
		radial-gradient(at 79% 69%, hsla(266, 68%, 36%, 1) 0px, transparent 50%),
		radial-gradient(at 98% 97%, hsla(328, 78%, 66%, 1) 0px, transparent 50%),
		radial-gradient(at 0% 98%, hsla(271, 61%, 65%, 1) 0px, transparent 50%);
}
</style>
