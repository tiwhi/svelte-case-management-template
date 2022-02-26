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
	<p><u>Phone</u>: {client.Phone}</p>
	<p><u> NYISD</u>: {client.NYSID}</p>
	<p><u>Docket</u>: {client.Docket}</p>
	{#if client.Indictment != ''}
		<p><u>Indictment</u>: {client.Indictment}</p>
	{/if}
	<p><u>Next Court Date</u>: {client.Next_Court_Date}</p>
	<p><u>Court Part</u>: {client.Next_Court_Part}</p>
	<p><u>Release Status</u>: {client.Release_Status}</p>
	<p>
		<u>Immigration Status</u>: {client.Immigration_Status}
	</p>
	<p><u>Top Charge</u>: {client.Curr_Top_Charge}</p>
</div>
