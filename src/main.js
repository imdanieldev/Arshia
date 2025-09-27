import './style.css'

document.querySelector('#app').innerHTML = `
<main class="bg-gray-950 w-full min-h-svh inter text-white">
	<section class="fixed z-10 top-0 left-0 w-full h-full overflow-hidden">
    	<div class="starsbg">
        	<div class="stars"></div>
        	<div class="shooting-star"></div>
        	<div class="shooting-star"></div>
        	<div class="shooting-star"></div>
        	<div class="shooting-star"></div>
        	<div class="shooting-star"></div>
    	</div>
	</section>
	<div class="w-full min-h-svh flex justify-center items-center px-8 py-4 relative z-20">
		<div class="w-fit xl:1/3 px-12 py-4 bg-white/5 rounded-xl backdrop-blur-xs">
			<div class="w-full flex justify-between items-center flex-col gap-y-6">
				<img src="/arshia.jpg" class="w-40 h-40 rounded-full border-4 border-solid border-white" />
				<h1 class="text-3xl text-center">Arshia Kadkhodaei</h1>
				<img src="/logo.png" class="w-36 h-auto" />
				<div class="flex w-full justify-center items-center gap-4 flex-wrap">
					<a href="https://instagram.com/z1arshia" class="text-xl sm:text-2xl flex gap-x-1 items-center bg-white/5 px-4 py-2 rounded-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor"><path stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"/><path stroke-width="1.5" d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.508 6.5h-.01"/></g></svg>
						z1arshia
					</a>
					<a href="https://t.me/ssArshia" class="text-xl sm:text-2xl flex gap-x-1 items-center bg-white/5 px-4 py-2 rounded-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724"/></svg>
						ssArshia
					</a>
				</div>
				<a href="tel:+989055145680" class="text-xl md:text-2xl flex gap-x-1 items-center bg-white/5 px-4 py-2 rounded-lg">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9.159 5.712l-.403-.906c-.263-.592-.395-.888-.592-1.115a2 2 0 0 0-.928-.603C6.949 3 6.625 3 5.976 3c-.948 0-1.422 0-1.82.182a2.12 2.12 0 0 0-1.061 1.169c-.143.413-.102.838-.02 1.689q1.31 13.575 14.886 14.885c.85.082 1.275.123 1.689-.02a2.12 2.12 0 0 0 1.168-1.06c.182-.399.182-.873.182-1.821c0-.649 0-.973-.088-1.26a2 2 0 0 0-.603-.928c-.226-.197-.523-.328-1.115-.592l-.906-.402c-.642-.285-.962-.428-1.288-.459a2 2 0 0 0-.919.128c-.305.119-.574.343-1.114.793c-.537.447-.805.67-1.133.79a2.16 2.16 0 0 1-.981.101c-.346-.05-.61-.192-1.14-.475c-1.645-.88-2.553-1.787-3.433-3.433c-.283-.53-.424-.794-.475-1.14a2.16 2.16 0 0 1 .1-.98c.12-.329.344-.597.791-1.134c.45-.54.675-.809.793-1.114c.114-.292.158-.607.128-.919c-.03-.325-.173-.646-.459-1.288Z"/></svg>
					09055145680
				</a>
			</div>
		</div>
	</div>
</main>
`
