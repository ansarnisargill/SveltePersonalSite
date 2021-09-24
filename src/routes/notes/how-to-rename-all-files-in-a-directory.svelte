<script context="module">
	export const prerender = true;
</script>

<script>
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	onMount(() => {
		hljs.highlightAll();
	});
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/"> /home </a>
			</li>
			<li>
				<a href="/notes"> /notes </a>
			</li>
		</ul>
	</nav>

	<main>
		<h1>How to rename all the files in a directory<span class="cursor">|</span></h1>
		<h2>With Powershell:</h2>
		<p>
			<code class="language-powershell">
				Get-ChildItem -Filter "search-term*" -Recurse | Rename-Item -NewName &#123; $_.name
				-replace `old-name','new-name' &#125;
			</code>
		</p>
	</main>
</div>
