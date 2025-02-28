<script lang="ts">
import { useCount } from 'hooks/useCount/useCount.svelte'
import Button from '../Button/Button.svelte'

const count = useCount()
</script>

<Button
  aria-label={`COUNT: ${count.getCount}`}
  label={`COUNT: ${count.getCount}`}
  onclick={count.setIncrement}
/>

