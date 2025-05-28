<script setup lang="ts">
import {
	BookOpenIcon,
	PhotoIcon,
	PuzzlePieceIcon,
	CubeIcon,
	ArrowDownTrayIcon,
	ShieldExclamationIcon,
	GlobeEuropeAfricaIcon,
	FaceSmileIcon,
	Cog8ToothIcon,
} from "@heroicons/vue/24/solid";

defineProps<{
	prevIcon?: string;
	nextIcon?: string;
}>();

const buttons = [{ name: "Télécharger", link: "/UzinSetup.exe", icon: ArrowDownTrayIcon }];

const cards = [
	{
		title: "Collectez",
		label: "Au début de votre aventure dans Uzin, vous devrez explorer la carte et extraire manuellement les premières ressources indispensables à votre progression. Charbon, fer, cuivre et or sont dispersés dans le monde, et il vous faudra les repérer, puis les miner.",
		icon: CubeIcon,
	},

	{
		title: "Défendez",
		label: "La planète ne restera pas passive face à votre activité. Plus vous extrayez de ressources et développez vos machines, plus vous attirez l'attention des créatures locales. Armez-vous et préparez-vous à les repousser.",
		icon: ShieldExclamationIcon,
	},
	{
		title: "Automatisez",
		label: "Dès que possible, construisez vos premières machines d'automatisation. Priorisez les chaînes de production simples avant de passer à des systèmes complexes. Plus vos infrastructures fonctionnent seules, plus vous pouvez vous concentrer sur l'exploration et la défense.",
		icon: Cog8ToothIcon,
	},

	{
		title: "Explorez",
		label: "Ne restez pas confiné à votre zone de départ. L'exploration vous permettra de découvrir des ressources rares, des technologies oubliées et des indices sur le passé mystérieux de la planète. Plus vous explorez, plus vous serez en mesure de fabriquer des objets.",
		icon: GlobeEuropeAfricaIcon,
	},
];

const steps = [
	{ label: "Lire le lore", icon: BookOpenIcon },
	{ label: "Voir la galerie", icon: PhotoIcon },
	{ label: "Télécharger", icon: ArrowDownTrayIcon },
	{ label: "Jouer", icon: PuzzlePieceIcon },
	{ label: "S'amuser", icon: FaceSmileIcon },
];

const firstRow = <typeof cards>[],
	secondRow = <typeof cards>[];

for (var i = 0; i < cards.length; i++) {
	(i % 2 == 0 ? firstRow : secondRow).push(cards[i]);
}

const items = [
	"/screenshots/1.png",
	"/screenshots/2.png",
	"/screenshots/3.png",
	"/screenshots/4.png",
	"/screenshots/5.png",
];
</script>

<template>
	<div class="bg-[#18181b] h-full flex flex-col space-y-14 font-pixelify overflow-x-hidden">
		<Navbar />

		<div class="relative flex flex-col items-center justify-center pt-14">
			<div
				class="absolute top-1/2 left-1/2 w-5xl h-96 rounded-full from-[#7f5381] to-[#eb9fe2] bg-gradient-to-r opacity-15 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl z-10"
			></div>

			<div class="flex flex-col gap-y-12 text-center">
				<img src="/logo_transparent.png" class="w-[275px] lg:w-sm h-auto mx-auto" />

				<h1 class="text-lg px-2 leading-9 font-semibold text-white lg:text-5xl lg:font-medium">
					Construisez, Automatisez, Survivez.
				</h1>
			</div>

			<p class="px-5 text-base lg:text-xl text-center text-gray-400 mt-7 lg:px-0 lg:mt-10">
				Un jeu où la <span class="font-medium text-white">gestion</span> rencontre la
				<span class="font-medium text-white">survie</span> dans un monde hostile.
			</p>

			<div class="flex flex-row w-full flex-wrap justify-center mt-12 gap-x-2 gap-y-2 lg:w-full">
				<a
					v-for="button in buttons"
					:key="button.name"
					href="/UzinSetup.exe"
					class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#7f5381] to-[#eb9fe2] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
				>
					<div
						class="relative px-5 py-2.5 flex flex-row space-x-1 transition-all ease-in duration-75 bg-gray-900 rounded-lg group-hover:bg-opacity-0"
					>
						<component :is="button.icon" class="w-5 h-5" />
						<span>{{ button.name }}</span>
					</div>
				</a>
			</div>
		</div>

		<UCarousel
			v-slot="{ item }"
			arrows
			:prev-icon="prevIcon"
			:next-icon="nextIcon"
			:items="items"
			class="w-[280px] lg:w-full max-w-sm lg:max-w-3xl mx-auto"
		>
			<img :src="item" width="800px" height="800px" class="rounded-lg" />
		</UCarousel>

		<div class="flex flex-col w-10/12 mx-auto mt-10 gap-y-6 lg:gap-y-0 lg:gap-x-8 lg:flex-row lg:w-8/12">
			<div class="w-full px-5 py-6 mx-auto overflow-hidden bg-[#7f5381] lg:w-[70%] lg:px-10 rounded-3xl lg:py-10">
				<div class="flex flex-col items-center space-y-4 text-sm text-left text-white lg:text-base">
					<p class="text-2xl font-semibold tracking-tight lg:text-4xl">À propos du jeu</p>

					<ul class="list-disc list-outside text-justify text-xs space-y-4 lg:text-[17px]">
						<li>
							L'histoire se déroule en l'an <b>2287</b>, dans un contexte où l'humanité a atteint un
							sommet démographique sans précédent : <b>42,7 milliards</b> d'habitants. Cette explosion de
							population a poussé la Terre au bord du gouffre, ses ressources s'épuisant à un rythme
							alarmant. Incapable de soutenir cette densité humaine, l'humanité a été contrainte de
							trouver des solutions radicales pour survivre.
						</li>

						<li>
							C'est dans ce contexte que le <b>programme d'exploration interstellaire</b> a vu le jour.
							Inspiré des anciens services militaires obligatoires, ce programme impose à chaque individu,
							dès leur majorité, de quitter la Terre pour participer à des missions d'extraction de
							ressources sur des planètes lointaines.
						</li>

						<li>
							Chaque explorateur reçoit uniquement de quoi financer un <b>aller simple</b> vers la planète
							d'extraction. Le retour sur Terre est conditionné à la réussite de leur mission, faisant de
							chaque voyage un pari risqué. Allez-vous y parvenir ?
						</li>
					</ul>
				</div>
			</div>

			<div
				class="w-full px-5 py-6 mx-auto text-white bg-[#aa5ca1] lg:w-[30%] lg:px-10 rounded-3xl space-y-5 justify-center lg:py-10 flex flex-col items-center"
			>
				<p class="text-2xl font-semibold tracking-tight lg:text-4xl">Et ensuite ?</p>

				<div class="justify-center">
					<div class="flex flex-col" v-for="(step, index) in steps">
						<div class="flex flex-col">
							<div class="flex flex-row space-x-3 items-center">
								<component :is="step.icon" class="w-10 h-10 p-2 text-white bg-[#eb86cd] rounded-full" />

								<p class="text-white text-xs lg:text-base">{{ step.label }}</p>
							</div>

							<span v-if="index !== steps.length - 1" class="w-0.5 h-6 bg-[#eb86cd] -mt-1 ml-[19.5px]" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-10/12 mx-auto lg:w-8/12" id="features">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<div class="space-y-6" v-for="row in [firstRow, secondRow]">
					<Card
						v-for="{ title, label, icon } in row"
						:name="title"
						:description="label"
						:icon="icon"
						color="purple"
					/>
				</div>
			</div>
		</div>

		<div class="pb-20">
			<div
				class="w-10/12 px-6 relative items-center flex flex-col space-y-6 overflow-hidden lg:w-8/12 bg-[#27272a] bg-opacity-30 rounded-3xl text-center mx-auto py-16 shadow-2xl shadow-[#4f4e4e05]"
				id="cta"
			>
				<h1 class="text-2xl font-semibold text-white lg:text-3xl">À vous de jouer !</h1>

				<p class="text-xs lg:text-base text-white text-opacity-80">
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
					class="w-full pointer-events-none -top-[125%] object-cover lg:object-contain lg:-top-[100%] -translate-x-1/2 left-1/2 blur-xl h-[64rem] absolute opacity-20"
				/>
			</div>
		</div>
	</div>
</template>
