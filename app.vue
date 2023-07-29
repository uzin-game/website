<script setup lang="ts">
import {
	CurrencyDollarIcon,
	ChartBarSquareIcon,
	LockClosedIcon,
	UserPlusIcon,
	GiftIcon,
	UserGroupIcon,
	QuestionMarkCircleIcon,
	ArrowTrendingUpIcon,
	BanknotesIcon,
	WalletIcon,
} from "@heroicons/vue/24/solid";

useHead({
	title: "Nitrogen - $NITRO",
	meta: [
		{
			name: "description",
			content: "Nitrogen is a hyper-deflationary token with 0% trade taxes. The first new idea since SafeMoon.",
		},
		{
			name: "keywords",
			content: "nitrogen, nitro, token, crypto, cryptocurrency, deflationary, hyper-deflationary, safemoon",
		},
		{ name: "theme-color", content: "#18181b" },
		{ name: "color-scheme", content: "dark" },
		{
			property: "og:image",
			content: "/logo.svg",
		},
		{
			property: "og:title",
			content: "Nitrogen - $NITRO",
		},
		{
			property: "og:description",
			content: "Nitrogen is a hyper-deflationary token with 0% trade taxes. The first new idea since SafeMoon.",
		},
		{
			property: "og:url",
			content: "https://nitrogen.app",
		},
	],
});

const buttons = [
	{ name: "Buy $NITRO", link: "#buy", icon: CurrencyDollarIcon },
	{ name: "Charts", link: "#", icon: ChartBarSquareIcon },
	{ name: "Stake", link: "#", icon: LockClosedIcon },
	{ name: "Join Telegram", link: "t.me/nitrogen", icon: UserPlusIcon },
];

const cards = [
	{
		title: "Holder rewards",
		label: "You may stake your $NITRO tokens for rewards using our custom-designed staking mechanism. Receive payouts in BNB and withdraw at anytime.",
		icon: GiftIcon,
	},

	{
		title: "What goes up must come down slower...",
		label: "With the nature of the new tax system, the price of the token will only decrease at 75% of the rate that it increases. This means that if there is the exact same amount of buy and sell volume, the price of the token will still be increasing instead of staying the same.",
		icon: ArrowTrendingUpIcon,
	},

	{
		title: "Ambitious & Transparent Team",
		label: "All funds used by the marketing wallet will be reported to the community to ensure ongoing trust. The marketing wallet will not just be used for marketing but for giveaways, promotions & further development. We have big dreams for Nitrogen and we'll be happy for you to join us.",
		icon: UserGroupIcon,
	},

	{
		title: "Create diamond hands",
		label: "Another unique feature we have invented and developed will only allow users to earn rewards on their $NITRO after they have held it for a certain amount of time, called the \"preliminary phase\" This will encourage users to hold their tokens for longer periods of time, creating diamond hands.",
		icon: QuestionMarkCircleIcon,
	},
];

const firstRow = <typeof cards>[],
	secondRow = <typeof cards>[];

for (var i = 0; i < cards.length; i++) {
	(i % 2 == 0 ? firstRow : secondRow).push(cards[i]);
}
</script>

<template>
	<div class="bg-[#18181b] h-full flex flex-col space-y-14 font-roobert overflow-x-hidden">
		<Navbar />

		<div class="relative flex flex-col items-center justify-center pt-14 mx-center">
			<div class="flex flex-col text-center">
				<h1 class="text-[40px] leading-9 font-semibold text-white lg:text-7xl lg:font-medium">
					The first new idea
				</h1>

				<h1
					class="text-transparent text-[40px] lg:text-7xl font-semibold lg:font-medium bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
				>
					since SafeMoon
				</h1>
			</div>

			<p class="px-5 text-xl text-center text-gray-400 mt-7 lg:px-0 lg:mt-10">
				<span class="font-medium text-white">Nitrogen</span> is a
				<span class="font-medium text-white">hyper-deflationary</span> token with
				<span class="font-medium text-white">0%</span> trade taxes.
			</p>

			<div class="flex flex-row flex-wrap justify-center w-4/5 mt-12 space-x-2 gap-y-2 lg:w-full">
				<button
					v-for="button in buttons"
					class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
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

		<div class="flex flex-col w-10/12 mx-auto mt-10 space-y-6 lg:space-y-0 lg:space-x-8 lg:flex-row lg:w-8/12">
			<div
				class="w-full px-5 py-6 mx-auto overflow-hidden bg-purple-500 lg:w-[70%] lg:px-10 rounded-3xl lg:py-10"
			>
				<div class="flex flex-col items-center space-y-2 text-sm text-left text-white lg:text-base">
					<p class="text-2xl font-semibold tracking-tight lg:text-3xl">How does it work?</p>

					<p>
						Instead of taxing users on their buy and sells, we have invented a process in which we tax
						directly from the liquidity pool <i>after</i> the trade has been completed and the
						<b>user has received 100% of the trade amount</b>.
					</p>

					<p>
						This means that we can still tax transactions at <strong>0 cost to the trader.</strong> The tax rate is 50% of
						the <code>$NITRO</code> trade value. The 50% is broken down as follows:
					</p>

					<ul class="self-start ml-4 list-disc">
						<li>Automatic LP: 6%</li>
						<li>Marketing: 6%</li>
						<li>Staking Rewards: 6%</li>
						<li>Automatic burn: 32%</li>
					</ul>
				</div>
			</div>

			<div
				class="w-full px-5 py-6 mx-auto text-white bg-indigo-400 lg:w-[30%] lg:px-10 rounded-3xl space-y-5 lg:py-10 flex flex-col items-center"
			>
				<p class="text-2xl font-semibold tracking-tight lg:text-3xl">Next steps</p>

				<div class="justify-center">
					<div class="flex flex-row items-start space-x-3">
						<div class="flex flex-col">
							<ChartBarSquareIcon class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" />

							<span class="w-0.5 h-6 -mt-1 bg-indigo-500 mx-auto" />
						</div>

						<p class="mt-1.5 text-white">Check charts</p>
					</div>

					<div class="flex flex-row items-start space-x-3">
						<div class="flex flex-col">
							<BanknotesIcon class="w-10 h-10 p-2 text-white bg-indigo-300 rounded-full" />

							<span class="w-0.5 h-6 -mt-1 bg-indigo-300 mx-auto" />
						</div>

						<p class="mt-1.5 text-white">Buy $NITRO</p>
					</div>

					<div class="flex flex-row items-start space-x-3">
						<div class="flex flex-col">
							<LockClosedIcon class="w-10 h-10 p-2 text-white bg-indigo-300 rounded-full" />

							<span class="w-0.5 h-6 -mt-1 bg-indigo-300 mx-auto" />
						</div>

						<p class="mt-1.5 text-white">Stake $NITRO</p>
					</div>

					<div class="flex flex-row items-start space-x-3">
						<WalletIcon class="w-10 h-10 p-2 text-white bg-indigo-300 rounded-full" />

						<p class="mt-1.5 text-white">Earn $NITRO</p>
					</div>
				</div>
			</div>
		</div>

		<div class="w-10/12 pb-12 mx-auto lg:w-8/12">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<div class="space-y-6" v-for="row in [firstRow, secondRow]">
					<Card v-for="{ title, label, icon } in row" :name="title" :description="label" :icon="icon" />
				</div>
			</div>
		</div>
	</div>
</template>
