<script>
    import { page } from '$app/stores';
    import { onDestroy } from 'svelte';

    let title = '';

    const unsubscribe = page.subscribe(($page) => {
        title = $page.params.title;
        title = title.slice(1)
        console.log(title)
    });

    onDestroy(unsubscribe);
</script>
