<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let navVisible = false;
	onMount(async () => {
		navVisible = true;
	});
</script>

<div class="navbar bg-base-100 shadow-lg">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl">Case Manager</a>
	</div>
	<div class="flex-none gap-2">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered" />
		</div>
		{#if navVisible}
			<div
				class:hidden={!navVisible}
				transition:fade={{ duration: 1000 }}
				class="dropdown dropdown-end"
			>
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				</label>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<!-- [TODO - Tim 2/25/22]: change the href here from the hardcoded one to a dynamic one based on whichever user is logged in-->
						<a href="/users/1" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		{:else}
			<div class="placeholder w-10 mt-3 p-2" />
		{/if}
	</div>
</div>
