<script>
  import { page } from '$app/stores';
  export let data;
</script>

<nav>
  <a href="/" aria-current={$page.url.pathname === '/'}>default</a>
  <a href="/fr" aria-current={$page.url.pathname === '/fr'}>fr</a>
  <a href="/en" aria-current={$page.url.pathname === '/en'}>en</a>
  <a href="/de" aria-current={$page.url.pathname === '/de'}>de</a>
</nav>
<h1>Home: {data.greetings}</h1>