<script lang="ts">
  import { v4 as uuidv4 } from 'uuid'
  import Card from '../Card.svelte'
  import Button from '../Button.svelte'
  import RatingSelect from './RatingSelect.svelte'
  import { FeedbackStore } from '../../stores'

  let text = ''
  let selected = 10
  let disabled = true
  let min = 10
  let message = ''

  const resetInput = () => {
    text = ''
    selected = 10
    disabled = true
  }

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      disabled = true
    } else {
      message = null
      disabled = false
    }
  }

  const handleRatingSelect = (e) => (selected = e.detail)

  const handleSubmit = () => {
    if (text.trim().length >= min) {
      const newFeedback = { id: uuidv4(), rating: +selected, text }

      FeedbackStore.update((currentFeedback) => [
        newFeedback,
        ...currentFeedback,
      ])
      resetInput()
    }
  }
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect {selected} on:rating-select={handleRatingSelect} />

    <div class="input-group">
      <input
        type="text"
        placeholder="Tell us something that keeps you coming back"
        bind:value={text}
        on:input={handleInput}
      />
      <Button type="submit" {disabled}>Send</Button>
    </div>

    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 600px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
