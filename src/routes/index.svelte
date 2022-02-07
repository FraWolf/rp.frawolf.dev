<script lang="ts">
	import UpdateForm from '$lib/Forms/UpdateForm.svelte';
	import { jsonFormData } from '../store';
	import type { ConnectionStatus, JSONData } from '../types/form';

	async function request(url: string): Promise<JSONData> {
		return await fetch(url).then((res) => res.json());
	}

	var waiting: ConnectionStatus = 'waiting';
	$: status = waiting;

	request('http://localhost:1709/data')
		.then((res) => {
			$jsonFormData = res;
			status = 'ready';
		})
		.catch((e) => {
			status = 'network_error';
		});
</script>

<svelte:head>
	<title>Rich Presence Manager</title>
</svelte:head>

<div class="text-center mx-auto justify-center my-10">
	<div class="mb-4">
		<h1 class="font-bold text-4xl">Discord Rich Presence Updater</h1>
		<h3 class="text-lg">Dynamic Rich Presence Manager</h3>
	</div>

	{#if status === 'waiting'}
		<h2 class="text-lg font-semibold text-gray-700 dark:text-white">
			Checking connection status ...
		</h2>
	{:else if status === 'network_error'}
		<h2 class="text-lg font-semibold text-red-800 dark:text-red-600">Network Error</h2>
	{:else}
		<h2 class="text-lg font-semibold text-green-800 dark:text-green-600">
			Connected to Rich Presence
		</h2>
	{/if}
</div>

<UpdateForm {status} />
