<script setup lang="ts">
import {
	CurrencyDollarIcon,
	ChartBarSquareIcon,
	LockClosedIcon,
	UserPlusIcon,
	GiftIcon,
	UserGroupIcon,
	ArrowTrendingUpIcon,
	BanknotesIcon,
	WalletIcon,
	BoltIcon,
} from "@heroicons/vue/24/solid";

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
		label: 'Another unique feature we have invented and developed will only allow users to earn rewards on their $NITRO after they have held it for a certain amount of time, called the "preliminary phase" This will encourage users to hold their tokens for longer periods of time, creating diamond hands.',
		icon: BoltIcon,
	},
];

const steps = [
	{ label: "Check charts", icon: ChartBarSquareIcon, done: true },
	{ label: "Buy $NITRO", icon: BanknotesIcon, done: false },
	{ label: "Stake $NITRO", icon: LockClosedIcon, done: false },
	{ label: "Earn $NITRO", icon: WalletIcon, done: false },
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

		<div
			id="how"
			class="flex flex-col w-10/12 mx-auto mt-10 space-y-6 lg:space-y-0 lg:space-x-8 lg:flex-row lg:w-8/12"
		>
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
						This means that we can still tax transactions at <strong>0 cost to the trader.</strong> The tax
						rate is 50% of the <code>$NITRO</code> trade value. The 50% is broken down as follows:
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
					<div class="flex flex-row items-start space-x-3" v-for="(step, index) in steps">
						<div class="flex flex-col">
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
				<h1 class="text-2xl font-semibold text-white lg:text-3xl">What are you waiting for?</h1>

				<p class="text-[15px] lg:text-[17px] text-white text-opacity-80">
					Don't miss out on any update by joining our Telegram channel.
					<br />
					Or you can follow us on Twitter. You choose.
				</p>

				<div class="flex flex-row items-center space-x-2">
					<a
						v-for="social in socials"
						href="#"
						class="text-black flex flex-row w-fit space-x-1.5 items-center bg-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
					>
						<img :src="`/icons/${social.icon}`" class="w-4 h-4" />
						<span>{{ social.name }}</span>
					</a>
				</div>

				<img
					src="/wave.svg"
					class="w-[64rem] pointer-events-none -top-[10%] object-cover lg:object-contain lg:-top-[110%] -translate-x-1/2 left-1/2 blur-xl h-[64rem] absolute opacity-20"
				/>
			</div>
		</div>
	</div>
</template>
