import { createVNode, render, nextTick } from 'vue'
import EditPopover from '@/components/EditPopover.vue'

const container = document.createElement('div')
let workEl = null
let tabindex = 0
let context = null
function createEditPopover(el, context) {
  if (workEl) return el.appendChild(workEl)
  console.log('createEditPopover')
  const vnode = createVNode(EditPopover)
  vnode.appContext = context
  render(vnode, container)
  workEl = container.firstElementChild
  el.appendChild(container.firstElementChild)
}

function handleDestory() {
  // render(null, container)
  workEl?.remove()
  // console.log('destory');
  // workEl = null
}

function handleFocus(e) {
  console.log('handleFocus', e)
  Array.from(e.target.parentElement.children).forEach((el) => {
    el.classList.remove('v-edit')
  })
  e.target.classList.add('v-edit')
  createEditPopover(e.target, context)
}

export const vEdit = function (el, binding, vnode) {
  el.setAttribute('tabindex', tabindex++)
  // el.classList.add('v-edit')
  context = vnode?.ctx?.appContext
  el.addEventListener('click', handleFocus)
  el.addEventListener('blur', handleDestory)
  // console.log({el, binding, vnode,context});
  binding.value && nextTick(() => el.click())
}
