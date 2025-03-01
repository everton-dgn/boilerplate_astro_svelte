import { useCount } from '../useCount.svelte'

describe('[hook] useCount', () => {
  it('should increment when call count', () => {
    const count = useCount()

    expect(count.getCount).toBe(0)
    count.setIncrement()

    expect(count.getCount).toBe(1)
    count.setIncrement()

    expect(count.getCount).toBe(2)
  })
})
