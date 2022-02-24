<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />
