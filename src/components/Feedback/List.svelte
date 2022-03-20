<script lang="ts">
  // import { onDestroy } from 'svelte'
  // import type { FeedbackItem } from '../types/FeedbackItem'
  // export let list = <FeedbackItem[]>[]
  // const unsubscribe = FeedbackStore.subscribe((data) => (list = data))
  // onDestroy(() => unsubscribe())

  import { fade, scale } from 'svelte/transition'
  import { FeedbackStore } from '../../stores'
  import FeedbackListItem from './ListItem.svelte'
</script>

{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackListItem {item} />
  </div>
{/each}
