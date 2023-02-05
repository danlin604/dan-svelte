<script>
  import "../app.css";

  /** @type {import('./$types').PageData} */
  export let data;

  console.log('layout -> data ->', data);
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<slot />