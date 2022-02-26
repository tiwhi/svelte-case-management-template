<script context="module">
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`/clients/${id}.json`);
		const client = await res.json();

		return {
			props: {
				client,
			},
		};
		return {
			status: 404,
			redirect: '/clients',
		};
	};
</script>

<script lang="ts">
	export let client;
</script>

<div class="card w-auto bg-base-100 shadow-xl m-5 p-5">
	<h2 class="text-lg">{client.Client}</h2>
	<p>
		NYISD: {client.NYSID}
	</p>
	<p>Docket: {client.Docket}</p>
	{#if client.Indictment != ''}
		<p>Indictment: {client.Indictment}</p>
	{/if}
	<p>Next Court Date: {client.Next_Court_Date}</p>
	<p>Court Part: {client.Next_Court_Part}</p>
	<p>Release Status: {client.Release_Status}</p>
	<p>Immigration Status: {client.Immigration_Status}</p>
	<p>Top Charge: {client.Curr_Top_Charge}</p>
</div>
