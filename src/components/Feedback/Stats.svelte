<script lang="ts">
  export let count: number = 0
  export let average: number = 0
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>

  {#if average}
    <h4>Ratings Average: {average}</h4>
  {/if}
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
