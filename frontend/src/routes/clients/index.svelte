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
	let searchTerm = '';

	$: filteredList = clients.filter((client) => {
		return (
			client.Client.toLowerCase().includes(searchTerm) ||
			client.Client.includes(searchTerm) ||
			client.NYSID.toLowerCase().includes(searchTerm) ||
			client.NYSID.includes(searchTerm) ||
			client.Next_Court_Date.includes(searchTerm) ||
			client.Docket.toLowerCase().includes(searchTerm) ||
			client.Docket.includes(searchTerm) ||
			client.Indictment.includes(searchTerm) ||
			client.Next_Court_Part.toLowerCase().includes(searchTerm) ||
			client.Next_Court_Part.includes(searchTerm) ||
			client.Release_Status.toLowerCase().includes(searchTerm) ||
			client.Release_Status.includes(searchTerm) ||
			client.Immigration_Status.toLowerCase().includes(searchTerm) ||
			client.Immigration_Status.includes(searchTerm) ||
			client.Curr_Top_Charge.includes(searchTerm) ||
			client.Curr_Top_Charge.toLowerCase().includes(searchTerm)
		);
	});
</script>

<h1 class="text-center m-5 text-5xl">All Clients</h1>

<div class="grid-cols-1 test-div bg-slate-100 text-black">
	<div>test content</div>
	<div>test content</div>
	<div>test content</div>
</div>

<div class="flex flex-col justify-center bg-slate-200">
	<div class="flex card min-w-md max-w-4xl bg-base-100 shadow-xl m-5 p-5">
		<div class="flex justify-center ">
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-primary w-full max-w-xs"
				bind:value={searchTerm}
			/>
		</div>
	</div>

	{#each filteredList as client}
		<div class="flex card max-w-4xl bg-base-100 shadow-xl m-5 p-5">
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
			<div class="badge badge-primary mt-2">
				<a sveltekit:prefetch href={`clients/${client.id}`}>View</a>
			</div>
		</div>
	{/each}
</div>
