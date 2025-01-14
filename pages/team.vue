<script setup lang="ts">
const people = [
	{
		name: "Tristan Druart",
		role: "Chef de projet",
		imageUrl: "/photos/tristan.jpg",
		bio: "Je suis étudiant en première année à l'EPITA, passionné par l'informatique depuis le lycée, où j'avais choisi les spécialités Mathématiques et Sciences de l'ingénieur. J'ai commencé à coder par curiosité et me suis rapidement intéressé à des langages comme Python. Aujourd'hui, je poursuis mes études en explorant des domaines tels que l'intelligence artificielle et la cybersécurité.",
	},
	{
		name: "Cyril Dejouhanet",
		role: "Designer",
		imageUrl: "/photos/cyril.jpg",
		bio: "Ayant toujours été intéressé par l'informatique et les ordinateurs, j'ai décidé au lycée de suivre la spécialité Numérique et Sciences Informatiques. Pris de passion, l'étape suivante a été de trouver une école supérieure, qui partageait cette passion et avec laquelle j'étais prêt à m'engager pour mes études. C'est ainsi que j'ai intégré l'EPITA en première année, puis le groupe Uzin.",
	},

	{
		name: "Martin Lemée",
		role: "Storyteller",
		imageUrl: "/photos/martin.jpg",
		bio: "Passionné par l'informatique depuis plus de dix ans, j'ai toujours été intrigué par les possibilités créatives qu'offre ce domaine. Cela m'a naturellement orienté vers des études en ingénierie informatique, ce qui m'a conduit à intégrer EPITA. En explorant divers aspects du numérique, j'ai acquis des compétences que je mets aujourd'hui au service de l'équipe dans la création de ce projet.",
	},

	{
		name: "Maxan Fournier",
		role: "Développeur",
		imageUrl: "/photos/maxan.jpg",
		bio: "Étudiant en première année du cycle préparatoire à l'EPITA, le choix de mes études fut une évidence au vu de ma passion pour l'informatique développée dès le plus jeune âge. Principalement expérimenté dans les technologies du web et ayant suivi la spécialité Numériques et Sciences de l'Informatique au lycée, je compte employer ces compétences au service de notre projet de jeu-vidéo.",
	},
];
</script>

<template>
	<div class="bg-[#18181b] h-screen flex flex-col font-poppins overflow-x-hidden">
		<Navbar />

		<div class="mx-auto py-24 px-0 sm:px-6 lg:px-24 space-y-20">
			<h2 class="text-4xl font-bold text-purple-500 tracking-tight sm:text-5xl text-center w-full">
				Notre équipe
			</h2>

			<ul role="list" class="lg:grid lg:items-start px-4 lg:px-8 grid-cols-2 space-y-12 lg:space-y-0 lg:gap-10">
				<li v-for="person in people" :key="person.name">
					<div
						class="sm:grid sm:grid-cols-3 sm:gap-6 space-y-6 sm:space-y-0 lg:gap-5 bg-[#29292c] bg-opacity-30 rounded-lg items-center p-5"
					>
						<img class="h-auto w-auto shadow-lg rounded-lg" :src="person.imageUrl" :alt="person.name" />

						<div class="sm:col-span-2">
							<div class="space-y-4">
								<div class="text-xl leading-6 font-medium space-y-1">
									<h3>{{ person.name }}</h3>
									<p class="text-purple-500">{{ person.role }}</p>
								</div>

								<p class="text-gray-300 text-xs 2xl:text-sm text-justify">{{ person.bio }}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
