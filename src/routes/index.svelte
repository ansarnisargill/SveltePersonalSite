<script>
	import Nav from '../components/Nav.svelte';
	import NavMobile from '../components/MobileNav.svelte';
	import Banner from '../components/Banner.svelte';
    import data from '../stringResources'
</script>
<svelte:head>
    <title>{data.name} - {data.job}</title>
</svelte:head>
<!-- Begin Header -->
<div class="header-wrapper" id="home">
	<!-- Begin Hero -->
	<section class="hero is-large">
		<Banner />
	</section>
	<!-- End Hero -->
</div>
<!-- End Header -->

