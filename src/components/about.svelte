<script>
    import {onDestroy,onMount} from 'svelte';
    onMount(()=>{
        ShowAbout();
    })
	async function ShowAbout() {
	
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
    onDestroy(()=>{
        console.log("destroyed");
    })
</script>

<div class="hidden">
	<div id="about-content">
		<h2>about-me:$<span class="cursor">|</span></h2>
		<p>Hi!</p>
		<p>This is Ansar Nisar.</p>
		<p>Some of the languages that I am fluent in include C#, dotnet, and JavaScript</p>
	</div>
</div>
