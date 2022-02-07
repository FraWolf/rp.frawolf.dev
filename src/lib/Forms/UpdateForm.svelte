<script lang="ts">
	import type { ConnectionStatus } from '../../types/form';
	import { firstButton, jsonFormData, secondButton } from '../../store';

	export let status: ConnectionStatus;

	$: {
		if (status === 'ready') {
			$firstButton = $jsonFormData.richPresence.buttons[0] || $firstButton;
			$secondButton = $jsonFormData.richPresence.buttons[1] || $secondButton;
		}
	}

	async function onSubmit() {
		$jsonFormData.richPresence.buttons = [];

		if ($firstButton.label !== '' && $firstButton.url !== '') {
			$jsonFormData.richPresence.buttons.push($firstButton);
		}

		if ($secondButton.label !== '' && $secondButton.url !== '') {
			$jsonFormData.richPresence.buttons.push($secondButton);
		}

		fetch('http://localhost:1709/update', {
			method: 'POST',
			body: JSON.stringify($jsonFormData)
		})
			.then(async (res) => {
				console.log(res.status, await res.json());
			})
			.catch(async (e) => {
				console.log(e.message);
			});
	}
</script>

<section class="max-w-4xl p-6 mx-6 md:mx-auto mb-6 bg-white rounded-md shadow-md dark:bg-gray-800">
	<form on:submit|preventDefault={onSubmit}>
		<div class="mt-6">
			<label class="text-gray-700 dark:text-gray-200" for="discord_application_id">
				Discord Application ID
			</label>
			<input
				id="discord_application_id"
				name="discord_application_id"
				type="text"
				class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
				bind:value={$jsonFormData.discordClientId}
			/>
		</div>
		<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_details">
					Details
				</label>
				<input
					id="discord_richpresence_details"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.details}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_state">
					State
				</label>
				<input
					id="discord_richpresence_state"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.state}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_bigimagename">
					Large image name
				</label>
				<input
					id="discord_richpresence_bigimagename"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.bigImageName}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_bigimagetext">
					Large image text
				</label>
				<input
					id="discord_richpresence_bigimagetext"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.bigImageText}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_smallimagename">
					Small image name
				</label>
				<input
					id="discord_richpresence_smallimagename"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.smallImageName}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_smallimagetext">
					Small image text
				</label>
				<input
					id="discord_richpresence_smallimagetext"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$jsonFormData.richPresence.smallImageText}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_firstbuttonlabel">
					Button #1 Label
				</label>
				<input
					id="discord_richpresence_firstbuttonlabel"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$firstButton.label}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_firstbuttonurl">
					Button #1 Url
				</label>
				<input
					id="discord_richpresence_firstbuttonurl"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$firstButton.url}
				/>
			</div>

			<div>
				<label
					class="text-gray-700 dark:text-gray-200"
					for="discord_richpresence_secondbuttonlabel"
				>
					Button #2 Label
				</label>
				<input
					id="discord_richpresence_secondbuttonlabel"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$secondButton.label}
				/>
			</div>

			<div>
				<label class="text-gray-700 dark:text-gray-200" for="discord_richpresence_secondbuttonurl">
					Button #2 Url
				</label>
				<input
					id="discord_richpresence_secondbuttonurl"
					type="text"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					bind:value={$secondButton.url}
				/>
			</div>
		</div>

		<div class="flex justify-end mt-6">
			<button
				type="submit"
				class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
				disabled={status === 'waiting' || status === 'network_error'}
			>
				Save
			</button>
		</div>
	</form>
</section>
