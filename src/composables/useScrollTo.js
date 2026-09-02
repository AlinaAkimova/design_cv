export function useScrollTo() {
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollToId }
}
