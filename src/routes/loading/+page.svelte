<script>
  export let data;
</script>

<h1>Loading</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/loading/{slug}">{title}</a></li>
  {/each}
</ul>