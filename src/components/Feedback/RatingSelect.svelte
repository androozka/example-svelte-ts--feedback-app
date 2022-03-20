<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let max = 10
  export let selected = max

  let range = []
  for (let i = 0; i < max; i++) range[i] = i + 1

  const onChange = (e) => dispatch('rating-select', e.currentTarget.value)
</script>

<ul class="rating">
  {#each range as i}
    <li>
      <input
        type="radio"
        id={`num${i}`}
        name="rating"
        value={i}
        on:change={onChange}
        checked={selected === i}
      />
      <label for={`num${i}`}>{i}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
