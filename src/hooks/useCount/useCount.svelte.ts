let count = $state(0)

export const useCount = () => ({
  get getCount() {
    return count
  },

  setIncrement: () => count++
})
