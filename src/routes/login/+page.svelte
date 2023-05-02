<!-- <script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

{#if form?.success}
  <p>Successfully logged in! Welcom back, {data.user.name}</p>
{/if}

<form method="POST" use:enhance action="?/login">
  {#if form?.missing}
    <p class="error">The email field is required</p>
  {/if}
  {#if form?.incorrect}
    <p class="error">Invalid credentials!</p>
  {/if}
  <label for="email">
    Email
    <input name="email" type="email" value={form?.email ?? ''}>
  </label>
  <label for="password">
    Password
    <input name="password" type="password">
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  label {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
</style> -->