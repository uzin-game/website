<script setup lang="ts">
import {
	BookOpenIcon,
	PhotoIcon,
	PuzzlePieceIcon,
	CubeIcon,
	ArrowDownTrayIcon,
	DocumentIcon,
    ShieldExclamationIcon,
    GlobeEuropeAfricaIcon,
	FaceSmileIcon,
    Cog8ToothIcon
} from "@heroicons/vue/24/solid";

const buttons = [
	{ name: "Télécharger", link: "#download", icon: ArrowDownTrayIcon },
	{ name: "Documents", link: "#documents", icon: DocumentIcon },
];

const cards = [
	{
		title: "Collectez",
		label: "Au début du jeu, concentrez-vous sur la collecte manuelle des ressources essentielles. Identifiez rapidement les gisements de matériaux précieux et optimisez vos trajets pour transporter le maximum possible.",
		icon: CubeIcon,
	},

	{
		title: "Automatisez",
		label: "Dès que possible, construisez vos premières machines d'automatisation. Priorisez les chaînes de production simples avant de passer à des systèmes complexes. Plus vos infrastructures fonctionnent seules, plus vous pouvez vous concentrer sur l'exploration et la défense.",
		icon: Cog8ToothIcon,
	},

	{
		title: "Défendez",
		label: "La planète ne restera pas passive. Installez des défenses autour de vos usines dès qu'elles commencent à attirer l'attention des créatures locales. Analysez les points faibles de vos installations et renforcez-les avec des tourelles, des barrières, ou des mécanismes avancés.",
		icon: ShieldExclamationIcon,
	},

	{
		title: "Explorez",
		label: "Ne restez pas confiné à votre zone de départ. L'exploration vous permettra de découvrir des ressources rares, des technologies oubliées et des indices sur le passé mystérieux de la planète. Plus vous explorez, plus vous serez en mesure d'améliorer vos infrastructures et de débloquer des fonctionnalités avancées.",
		icon: GlobeEuropeAfricaIcon,
	},
];

const steps = [
	{ label: "Lire le lore", icon: BookOpenIcon, done: true },
	{ label: "Voir la gallerie", icon: PhotoIcon, done: false },
	{ label: "Télécharger", icon: ArrowDownTrayIcon, done: false },
	{ label: "Jouer", icon: PuzzlePieceIcon, done: false },
	{ label: "S'amuser", icon: FaceSmileIcon, done: false },
];

const socials = [
	{ name: "Twitter", icon: "twitter.svg" },
	{ name: "Telegram", icon: "telegram.svg" },
];

const firstRow = <typeof cards>[],
	secondRow = <typeof cards>[];

for (var i = 0; i < cards.length; i++) {
	(i % 2 == 0 ? firstRow : secondRow).push(cards[i]);
}
</script>

<template>
	<div class="bg-[#18181b] h-full flex flex-col space-y-14 font-poppins overflow-x-hidden">
		<Navbar />

		<div class="relative flex flex-col items-center justify-center pt-14 mx-center">
			<div class="flex flex-col gap-y-2 text-center">
				<h1
					class="text-7xl lg:text-8xl font-semibold animate-text tracking-normal bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
				>
					Uzin
				</h1>

				<h1 class="text-3xl px-2 leading-9 font-semibold text-white lg:text-5xl lg:font-medium">
					Construisez, Automatisez, Survivez.
				</h1>
			</div>

			<p class="px-5 text-lg lg:text-xl text-center text-gray-400 mt-7 lg:px-0 lg:mt-10">
				Un jeu où la <span class="font-medium text-white">gestion</span> rencontre la
				<span class="font-medium text-white">survie</span> dans un monde hostile et évolutif.
			</p>

			<div class="flex flex-row flex-wrap justify-center w-4/5 mt-12 gap-x-2 gap-y-2 lg:w-full">
				<button
					v-for="button in buttons"
					class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
				>
					<div
						class="relative px-5 py-2.5 flex flex-row space-x-1 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0"
					>
						<component :is="button.icon" class="w-5 h-5" />
						<span>{{ button.name }}</span>
					</div>
				</button>
			</div>

			<div class="z-10">
				<Bubbles />
			</div>
		</div>

		<div
			id="how"
			class="flex flex-col w-10/12 mx-auto mt-10 space-y-6 lg:space-y-0 lg:space-x-8 lg:flex-row lg:w-8/12"
		>
			<div
				class="w-full px-5 py-6 mx-auto overflow-hidden bg-purple-500 lg:w-[70%] lg:px-10 rounded-3xl lg:py-10"
			>
				<div class="flex flex-col items-center space-y-4 text-sm text-left text-white lg:text-base">
					<p class="text-2xl font-semibold tracking-tight lg:text-3xl">À propos du jeu</p>

					<ul class="list-disc list-outside text-sm space-y-4">
						<li>
							Dans <i>Uzin</i>, vous incarnez un pionnier envoyé sur une planète mystérieuse, autrefois
							habitée par une civilisation disparue. Ce monde, marqué par un écosystème hostile et
							imprévisible, regorge de ressources précieuses et de structures anciennes empreintes de
							mystère.
						</li>

						<li>
							Au fur et à mesure que vous bâtissez vos usines et automatisez vos processus pour survivre,
							la planète réagit à votre présence. Des créatures redoutables et des pièges naturels
							émergent pour protéger les secrets enfouis de ce lieu.
						</li>

						<li>
							Chaque décision que vous prenez devient cruciale : progresserez-vous vers la prospérité, ou
							succomberez-vous au chaos d'un environnement qui ne tolère aucune faiblesse ?
						</li>
					</ul>
				</div>
			</div>

			<div
				class="w-full px-5 py-6 mx-auto text-white bg-indigo-400 lg:w-[30%] lg:px-10 rounded-3xl space-y-5 justify-center lg:py-10 flex flex-col items-center"
			>
				<p class="text-2xl font-semibold tracking-tight lg:text-3xl">À faire ensuite</p>

				<div class="justify-center">
					<div class="flex flex-row items-start space-x-3" v-for="(step, index) in steps">
						<div class="flex flex-col text-sm">
							<component
								:is="step.icon"
								:class="step.done ? 'bg-indigo-500' : 'bg-indigo-300'"
								class="w-10 h-10 p-2 text-white rounded-full"
							/>

							<span
								v-if="index !== steps.length - 1"
								:class="step.done ? 'bg-indigo-500' : 'bg-indigo-300'"
								class="w-0.5 h-6 -mt-1 mx-auto"
							/>
						</div>

						<p class="mt-1.5 text-white">{{ step.label }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="w-10/12 mx-auto lg:w-8/12" id="features">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<div class="space-y-6" v-for="row in [firstRow, secondRow]">
					<Card v-for="{ title, label, icon } in row" :name="title" :description="label" :icon="icon" />
				</div>
			</div>
		</div>

		<div class="pb-20">
			<div
				class="w-10/12 px-6 relative items-center flex flex-col space-y-6 overflow-hidden lg:w-8/12 bg-[#27272a] bg-opacity-30 rounded-3xl text-center mx-auto py-16 shadow-2xl shadow-[#4f4e4e05]"
				id="cta"
			>
				<h1 class="text-2xl font-semibold text-white lg:text-3xl">Alors ? Convaincu ?</h1>

				<p class="text-[15px] lg:text-[17px] text-white text-opacity-80">
					Le futur des jeux de gestion se trouve ici.
					<br />Commencez votre aventure aujourd'hui.
				</p>

				<a
					href="#"
					class="text-black flex flex-row w-fit space-x-1.5 items-center bg-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
				>
					<div class="flex flex-row space-x-2 items-center">
						<ArrowDownTrayIcon class="w-4 h-4" />
						<p>Télécharger</p>
					</div>
				</a>

				<img
					src="/wave.svg"
					class="w-full pointer-events-none -top-[10%] object-cover lg:object-contain lg:-top-[110%] -translate-x-1/2 left-1/2 blur-xl h-[64rem] absolute opacity-20"
				/>
			</div>
		</div>
	</div>
</template>
