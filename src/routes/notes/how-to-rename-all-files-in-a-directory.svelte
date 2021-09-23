<script context="module">
	export const prerender = true;
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
		<code>Get-ChildItem -Filter "lesson*" -Recurse | Rename-Item -NewName &#123; $_.name -replace `lesson','' &#125;</code>
	</main>
</div>
