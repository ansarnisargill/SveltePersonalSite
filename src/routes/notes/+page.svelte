<script>
	import data from '../../stringResources';
	const links = data.notes.links;
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/"> /home </a>
			</li>
		</ul>
	</nav>

	<main>
		<h1>Notes:$<span class="cursor">|</span></h1>
		<h3>List of Posts:</h3>
		<ol>
			{#each links as link}
				<li>
					<a href={link.link}>
						{link.heading}
					</a>
				</li>
			{/each}
		</ol>
	</main>
</div>

<style>
	a:hover {
		text-decoration: underline;
	}
</style>
