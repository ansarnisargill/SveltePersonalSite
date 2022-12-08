<script>
	import { routeToHome } from '../../Helpers';
</script>

<div class="container">
	<nav>
		<ul>
			<li on:click={routeToHome}>/home</li>
		</ul>
	</nav>

	<main>
		<h1>Essays:$<span class="cursor">|</span></h1>
		<h3>List of Posts:</h3>
	</main>
</div>
