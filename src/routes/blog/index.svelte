<script context="module">
	export const prerender = true;
</script>

<script>
import {goto} from '$app/navigation'
async function routeToHome(){
	await goto("/");
}
</script>

<div class="container">
	<nav>
		<ul>
			<li on:click={routeToHome}>/home</li>
		</ul>
	</nav>

	<main>
		<h1>Blog:$<span class="cursor">|</span></h1>
		<h3>List of Posts:</h3>
	</main>
</div>


