<script lang="ts">
	import Modal from "$lib/components/ui/Modal.svelte";
	import { application } from "$lib/stores/application.svelte";

</script>

<Modal title='Application preferences' onClose={() => application.isOpenSetup = false}>
	<div class="min-w-[600px]">

	</div>
</Modal>
