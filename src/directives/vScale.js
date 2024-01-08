export const vScale = (el, binding) => {
  const scale = binding.value
  el.style.height = `${el.offsetWidth / scale}px`
}
