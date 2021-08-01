<script context="module">
	export const prerender = true;
</script>

<script>
	async function openAboutWindow() {
		const { default: WinBox } = await import('../winbox/winbox');
		const aboutBox = new WinBox({
			title: 'About Me',
			width: '400px',
			height: '400px',
			top: 50,
			right: 50,
			bottom: 50,
			left: 50,
			mount: document.querySelector('#about-content'),
			onfocus: function () {
				this.setBackground('#00aa00');
			},
			onblur: function () {
				this.setBackground('#777');
			}
		});
	}
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
			<li id="about" on:click={openAboutWindow}>/about</li>
			<li id="contact" on:click={openContactWindow}>/contact</li>
		</ul>
	</nav>

	<main>
		<h1>Ansar Nisar:$<span class="cursor">|</span></h1>
		<h3>Find me online:</h3>
		<ul>
			<li>
				<a href="https://twitter.com/ansarnisargill2" target="_blank">Twitter</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/ansarnisar/" target="_blank">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/ansarnisargill/" target="_blank">Github</a>
			</li>
		</ul>
	</main>
</div>

<div class="hidden">
	<div id="about-content">
		<h2>about-me:$<span class="cursor">|</span></h2>
		<p>Hi!</p>
		<p>This is Ansar Nisar.</p>
		<p>Some of the languages that I am fluent in include C#, dotnet, and JavaScript</p>
	</div>

	<div id="contact-content">
		<h2>contact-me:$<span class="cursor">|</span></h2>
		<p>You can contact me at the email and phone number below</p>
		<ul>
			<li>Phone: +923074257049</li>
			<li>Email: ansarnisargill@gmail.com</li>
		</ul>
	</div>
</div>
