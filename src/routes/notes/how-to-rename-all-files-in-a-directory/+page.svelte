<script>
	import Highlight from 'svelte-highlight';
	import powershell from 'svelte-highlight/languages/powershell';
	import monokai from 'svelte-highlight/styles/monokai';
	import data from '../../../stringResources';
</script>

<svelte:head>
	{@html monokai}
</svelte:head>
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
			<code class="language-powershell" />
			<Highlight language={powershell} code={data.notes.codeSnippets.rename_with_powershell} />
		</p>
	</main>
</div>
