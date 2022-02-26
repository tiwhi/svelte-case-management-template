<script context="module">
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const userID = params.id;

		const [userRes, clientsRes] = await Promise.all([
			fetch(`/users/${id}.json`),
			fetch(`/clients/by_user/${userID}.json`),
		]);

		const user = await userRes.json();
		const clients = await clientsRes.json();

		return {
			props: {
				user,
				clients,
			},
		};
	};
</script>

<script lang="ts">
	export let user;
	export let clients;
</script>

<div class="card w-auto bg-base-100 shadow-xl m-5 p-5">
	<p class="text-xl">{user.firstName} {user.lastName}</p>
	<p><u>Email</u>: {user.email}</p>
	<p><u>Phone</u>: {user.workCell}</p>
	<p><u>Open Cases</u>: {clients.length}</p>
</div>

<div class="btn-group justify-center">
	<input type="radio" name="options" data-title="This Week" class="btn" />
	<input
		type="radio"
		name="options"
		data-title="Two Weeks"
		checked="checked"
		class="btn"
	/>
	<input type="radio" name="options" data-title="Month" class="btn" />
</div>
<div class="divider" />
{#each clients as client}
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
		<div class="badge badge-primary mt-2">
			<a sveltekit:prefetch href={`/clients/${client.id}`}>View</a>
		</div>
	</div>
{/each}
