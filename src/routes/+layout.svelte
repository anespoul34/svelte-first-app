<script lang="ts">
  import { page, navigating, updated } from '$app/stores';
  
  export let data;
</script>

<nav>
  <a href="/" aria-current={$page.url.pathname === '/'}>Home</a>
  <a href="/about" data-sveltekit-preload-data aria-current={$page.url.pathname === '/about'}>About</a>
  <a href="/todos" aria-current={$page.url.pathname === '/todos'}>Todos</a>
  <a href="/login" aria-current={$page.url.pathname === '/login'}>Login</a>
  <a href="/blog" aria-current={$page.url.pathname === '/blog'}>Blog</a>
  <a href="/settings" aria-current={$page.url.pathname === '/settings'}>Settings</a>
  <a href="/api" aria-current={$page.url.pathname === '/api'}>Api</a>
  <a href="/loading" aria-current={$page.url.pathname === '/loading'}>Loading</a>
  {#if $navigating}
    navigating to {$navigating.to?.url.pathname}
  {/if}
</nav>
<h1>Welcome to SvelteKit: {data.message}</h1>
<slot />
{#if $updated}
  <p class="toast">
    A new version of the app is available

    <button on:click={() => location.reload()}>
      reload the page
    </button>
  </p>
{/if}