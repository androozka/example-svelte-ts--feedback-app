<script lang="ts">
  import FeedbackList from './components/Feedback/List.svelte'
  import FeedbackStats from './components/Feedback/Stats.svelte'
  import FeedbackForm from './components/Feedback/Form.svelte'

  import { FeedbackStore as fb } from './stores'

  $: count = $fb.length
  $: average = $fb.reduce((a, { rating }) => a + rating, 0) / $fb.length
</script>

<main class="container">
  <header>
    <h1>Svelte Example - Feedback App</h1>
  </header>

  <FeedbackForm />
  <FeedbackStats {count} {average} />
  <FeedbackList />
</main>

<style>
  header {
    max-width: 600px;
    margin: auto;
  }

  header h1 {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }
</style>
