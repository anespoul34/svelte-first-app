<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="settings-page">
  <div class="submenu">
    <h1>Settings</h1>
    {#each data.sections as section}
      <a href="/settings/{section.slug}">{section.title}</a>
    {/each}
  </div>
  <slot></slot>
</div>

<style>
  .settings-page {
    display: flex;
  }
  .submenu {
    width: 120px;
    height: 100vh;
    background: lightgrey;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
</style>