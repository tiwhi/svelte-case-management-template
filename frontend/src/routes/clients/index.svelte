<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/clients.json');
		const clients = await res.json();

		if (res.ok) {
			return {
				props: {
					clients,
				},
			};
		}
		// if not res.ok -> i.e. if there is an error
		return {
			status: res.status,
			error: new Error('Could not fetch the clients'),
		};
	};
</script>

<script lang="ts">
	export let clients;
</script>

<h1>All Clients</h1>

{#each clients as client}
	<div class="card w-fit bg-neutral shadow-xl m-5 p-5">
		<h2>{client.Client}</h2>
		<p>NYISD: {client.NYSID}</p>
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
{/each}
