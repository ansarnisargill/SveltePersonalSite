<script>
	import { onMount } from 'svelte';
	onMount(async() => {
		const {default:WinBox } = await import('../winbox/winbox');
		const about = document.querySelector('#about');
		const contact = document.querySelector('#contact');
		const aboutContent = document.querySelector('#about-content');
		const contactContent = document.querySelector('#contact-content');

		about.addEventListener('click', () => {
			const aboutBox = new WinBox({
				title: 'About Me',
				// modal: true,
				width: '400px',
				height: '400px',
				top: 50,
				right: 50,
				bottom: 50,
				left: 50,
				mount: aboutContent,
				onfocus: function () {
					this.setBackground('#00aa00');
				},
				onblur: function () {
					this.setBackground('#777');
				}
			});
		});

		contact.addEventListener('click', () => {
			const contactBox = new WinBox({
				title: 'Contact Me',
				width: '400px',
				height: '400px',
				top: 150,
				right: 50,
				bottom: 50,
				left: 250,
				mount: contactContent,
				onfocus: function () {
					this.setBackground('#00aa00');
				},
				onblur: function () {
					this.setBackground('#777');
				}
			});
		});
	});
</script>

<div class="container">
	<nav>
		<ul>
			<li id="about">/about</li>
			<li id="contact">/contact</li>
		</ul>
	</nav>

	<main>
		<h1>Ansar Nisar:$<span class="cursor">|</span></h1>
		<h3>Find me online:</h3>
		<ul>
			<li>
				<a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank"
					>YouTube</a
				>
			</li>
			<li>
				<a href="https://www.udemy.com/user/brad-traversy/" target="_blank">Udemy</a>
			</li>
			<li>
				<a href="https://twitter.com/traversymedia" target="_blank">Twitter</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/bradtraversy/" target="_blank">LinkedIn</a>
			</li>
			<li>
				<a href="https://www.instagram.com/traversymedia/" target="_blank">Instagram</a>
			</li>
			<li>
				<a href="https://github.com/bradtraversy" target="_blank">Github</a>
			</li>
			<li>
				<a href="https://codepen.io/bradtraversy" target="_blank">Codepen</a>
			</li>
		</ul>
	</main>
</div>

<div class="hidden">
	<div id="about-content">
		<h2>about-me:$<span class="cursor">|</span></h2>
		<p>My name is Brad Traversy and I have been programming for 14 years</p>
		<p>Some of the languages that I am fluent in include JavaScript, Python, PHP and Ruby</p>
	</div>

	<div id="contact-content">
		<h2>contact-me:$<span class="cursor">|</span></h2>
		<p>You can contact me at the email and phone number below</p>
		<ul>
			<li>Phone: 555-555-5555</li>
			<li>Email: brad@email.com</li>
		</ul>
	</div>
</div>
