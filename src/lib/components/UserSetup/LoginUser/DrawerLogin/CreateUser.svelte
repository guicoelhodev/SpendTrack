<script lang="ts">
	import type { TUser } from "$lib/types/User";
	import * as z from 'zod'

	const formShema = z.object({
		name: z
			.string()
			.nonempty({ message: 'Required field'})
			.refine(i => i.trim().split(' ').length === 2, {
				message: 'Add name and last name'
			}),
		nickname: z
			.string()
			.nonempty({ message: 'Required field'})
			.refine(i => i.split(' ').length === 1, {
				message: 'Choose a unique username, like myUser or my_user.'
			})
		,
	});

	let formData: TUser = $state({
		id: crypto.randomUUID(),
		name: '',
		nickname: ''
	});

	let formErrors: Record<keyof TUser, string> = $state({
		id: '',
		name: '',
		nickname: ''
	})

	type TCreateUserProps = {
		onCreateUser: (newUser: TUser) => Promise<void> 
	}

	const props: TCreateUserProps = $props()
</script>
<form 
	onsubmit={async(e) => {
		e.preventDefault();
		const validation = await formShema.safeParseAsync(formData);

		if(validation.success) return props.onCreateUser(formData)

		Object.keys(formData).forEach(inputKey => {
			const key = inputKey as keyof TUser
			const error = validation.error.issues.find(i => i.path[0] === inputKey)

			if(error?.message) return formErrors[key] = error.message
			return formErrors[key] = ''
		})
	}}
	class="flex flex-col gap-4 h-full justify-between">
	<section class="flex flex-col gap-2">
		<article class="flex flex-col gap-2">
			<label
					class="flex flex-col text-text-secondary text-sm"
					for='name-input'
				>
				Name:
			</label>

			<input 
				bind:value={formData.name}
				name='name'
				id='name-input'
				placeholder="Type here your name"
				class="border p-2 rounded-md border-text-secondary focus:outline-1  focus:outline-text-primary"
			/>

			{#if formErrors.name}
				<span class="text-sm text-red">{formErrors.name}</span>
			{/if}
		</article>

		<article class="flex flex-col gap-2">
			<label
					class="flex flex-col text-text-secondary text-sm"
					for='nickname-input'
				>
				Username:
			</label>

			<input 
				bind:value={formData.nickname}
				name='nickname'
				id='nickname-input'
				placeholder="Type here your username"
				class="border p-2 rounded-md border-text-secondary focus:outline-1  focus:outline-text-primary"
			/>

			{#if formErrors.nickname}
				<span class="text-sm text-red">{formErrors.nickname}</span>
			{/if}
		</article>
	</section>
	
	<footer>
		<button 
			type="submit"
			class="bg-green-600 w-full p-2 rounded-md">
				Add new user
		</button>
	</footer>

</form>
