import { writable } from 'svelte/store'
import type { FeedbackItem } from './types/FeedbackItem'

export const FeedbackStore = writable<FeedbackItem[]>([
  {
    id: 1,
    rating: 10,
    text: "It was the best experience that I've ever had!!!",
  },
  {
    id: 2,
    rating: 8,
    text: "It's good, but what about React, Vue, or Anguar?",
  },
  {
    id: 3,
    rating: 9,
    text: 'Keep building.  Need more examples and practice!',
  },
])
