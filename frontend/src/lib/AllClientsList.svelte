<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('localhost:3000');
		const clients = await res.json();
		return {
			props: {
				clients,
			},
		};
	};
</script>

<div class="container m-10">
	<h1 class="text-6xl mb-5">Homepage</h1>

	<p class="prose">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto minus
		temporibus assumenda eum officia sint deleniti debitis, totam, distinctio
		natus quasi labore quod maiores optio fugiat quam mollitia ut et!
	</p>
</div>
