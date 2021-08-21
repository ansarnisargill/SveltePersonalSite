<script context="module">
	export const prerender = true;
</script>

<script>
	let showAbout = false;
	import Social from '../components/social.svelte';
	import Nav from '../components/nav.svelte';
	import About from '../components/about.svelte';
	async function openContactWindow() {
		const { default: WinBox } = await import('../winbox/winbox');
		const contactBox = new WinBox({
			title: 'Contact Me',
			width: '400px',
			height: '400px',
			top: 150,
			right: 50,
			bottom: 50,
			left: 250,
			mount: document.querySelector('#contact-content'),
			onfocus: function () {
				this.setBackground('#00aa00');
			},
			onblur: function () {
				this.setBackground('#777');
			}
		});
	}
</script>

<div class="container">
	<nav>
		<ul>
			<li
				id="about"
				on:click={() => {
					showAbout = !showAbout;
				}}
			>
				/about
			</li>
			<li id="contact" on:click={openContactWindow}>/contact</li>
		</ul>
	</nav>

	<main>
		<h1>Ansar Nisar:$<span class="cursor">|</span></h1>
		<Nav />
		<Social />
	</main>
</div>
{#if showAbout}
<About />
{/if}
<div class="hidden">
	<div id="contact-content">
		<h2>contact-me:$<span class="cursor">|</span></h2>
		<p>You can contact me at the email and phone number below</p>
		<ul>
			<li>Phone: +923074257049</li>
			<li>Email: ansarnisargill@gmail.com</li>
		</ul>
	</div>
</div>
