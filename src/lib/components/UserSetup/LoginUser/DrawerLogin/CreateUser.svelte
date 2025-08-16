<script lang="ts">
	import type { TUser } from "$lib/types/User";

	type TCreateUserProps = {
		onCreateUser: (newUser: TUser) => void 
	}

	const props: TCreateUserProps = $props()

</script>
<form 
	onsubmit={(e) => {
		e.preventDefault();
		
		const formData = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries()) as TUser

		return props.onCreateUser(data)
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
				defaultValue='Hello World'
				name='name'
				id='name-input'
				placeholder="Type here your name"
				class="border p-2 rounded-md border-text-secondary focus:outline-1  focus:outline-text-primary"
			/>
		</article>

		<article class="flex flex-col gap-2">
			<label
					class="flex flex-col text-text-secondary text-sm"
					for='nickname-input'
				>
				Username:
			</label>

			<input 
				defaultValue='hello_world'
				name='nickname'
				id='nickname-input'
				placeholder="Type here your username"
				class="border p-2 rounded-md border-text-secondary focus:outline-1  focus:outline-text-primary"
			/>
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
