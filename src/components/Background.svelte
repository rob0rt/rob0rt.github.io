<script lang="ts">
  import { onMount } from "svelte";

  const BLOCK_WIDTH = 150;
  let horizonalCount = Math.ceil(window.innerWidth / BLOCK_WIDTH);
  let verticalCount = Math.ceil(window.innerHeight / BLOCK_WIDTH);

  onMount(() => {
    function onResize() {
      horizonalCount = Math.ceil(window.innerWidth / BLOCK_WIDTH);
      verticalCount = Math.ceil(window.innerHeight / BLOCK_WIDTH);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  const MAX_COLOR = 56;
  const MIN_COLOR = 48;
  function getColor() {
    const n = Math.round(Math.random() * (MAX_COLOR - MIN_COLOR) + MIN_COLOR);
    return `rgb(${n}, ${n}, ${n})`;
  }

  function getDelay(x: number, y: number) {
    return (Math.random() + (x / horizonalCount + y / verticalCount) * 5) / 2;
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="background">
  {#each Array.from({ length: horizonalCount }, (_, i) => i) as x}
    {#each Array.from({ length: verticalCount }, (_, i) => i) as y}
      <!-- top left -->
      <path
        d={`
          M ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />
      <path
        d={`
          M ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />

      <!-- top right -->
      <path
        d={`
          M ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />
      <path
        d={`
          M ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />

      <!-- bottom left -->
      <path
        d={`
          M ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />
      <path
        d={`
          M ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />

      <!-- bottom right -->
      <path
        d={`
          M ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />
      <path
        d={`
          M ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH / 2} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH / 2}
          L ${x * BLOCK_WIDTH + BLOCK_WIDTH} ${y * BLOCK_WIDTH + BLOCK_WIDTH}
        `}
        color={getColor()}
        class="tile"
        style={`animation-delay: ${getDelay(x, y)}s;`}
      />
    {/each}
  {/each}
</svg>
