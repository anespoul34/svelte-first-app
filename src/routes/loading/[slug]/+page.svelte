<script lang="ts">
  import { page } from '$app/stores';
  // import type { PageData } from './$types';

  export let data;

  $: index = data.summaries.findIndex(post => post.slug === $page.params.slug);
  $: next = data.summaries[index + 1];
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

{#if next}
  <p>Next post: <a href="/loading/{next.slug}">{next.title}</a></p>
{/if}