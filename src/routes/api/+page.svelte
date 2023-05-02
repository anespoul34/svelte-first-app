<script>
  let a = 0;
  let b = 0;
  let total = 0;
  let randomNumber = 0;

  async function add() {
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({ a, b }),
      headers: {
        'content-type': 'application/json'
      }
    });

    total = await response.json();
  }

  async function getRandomNumber() {
    const response = await fetch('/api/random-number', {
      method: 'GET'
    });
    const value = await response.text();
    console.log(value);
    randomNumber = Number(value);
  }

</script>

<div class="wrapper">
  <div>
    <input type="number" bind:value={a}> +
    <input type="number" bind:value={b}> =
    {total}
    <button on:click={add}>Calculate</button>
  </div>
  <div>
    <span>{randomNumber}</span>
    <button on:click={getRandomNumber}>Generate Random</button>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
