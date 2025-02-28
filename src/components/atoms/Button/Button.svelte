<script lang="ts">
import S from './styles.module.css'
import type { ButtonProps } from './types'

const { label, ...props }: ButtonProps = $props()
</script>

<button class={S.button} {...props}>
    {label}
</button>

