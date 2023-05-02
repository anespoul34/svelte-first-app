<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<main>
  <slot />
</main>

<aside>
  <h2>More posts</h2>
  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/loading/{slug}">{title}</a></li>
    {/each}
  </ul>
</aside>