/* eslint-disable no-unused-vars */
import { createVNode, render, nextTick } from 'vue'
import EditPopover from '@/components/EditPopover.vue'

const container = document.createElement('div')
let workEl = null
let tabindex = 0
let context = null
function createEditPopover(el) {
  el.classList.add('v-edit')
  if (workEl) return el.appendChild(workEl)
  console.log('createEditPopover')
  const vnode = createVNode(EditPopover)
  vnode.appContext = context
  render(vnode, container)
  workEl = container.firstElementChild
  el.appendChild(container.firstElementChild)
}

function handleDestory(el) {
  // render(null, container)
  // workEl?.remove()
  el.classList.remove('v-edit')
  if (el.lastElementChild === workEl) workEl?.remove()
  // workEl = null
  // console.log('destory');
}

function handleFocus(e) {
  e.stopPropagation()
  const el = e.currentTarget
  Array.from(el.parentElement.children).forEach((i) => {
    i.classList.remove('v-edit')
  })
  el.classList.add('v-edit')
  createEditPopover(el, context)
}

export const vEdit = function (el, binding, vnode) {
  // el.setAttribute('tabindex', tabindex++)
  el.classList.add('cursor-pointer')
  context = vnode?.ctx?.appContext
  // el.addEventListener('click', handleFocus)
  // el.addEventListener('blur', handleDestory)
  // console.log({el, binding, vnode,context});
  // binding.value && nextTick(() => el.click())
  binding.value ? createEditPopover(el) : handleDestory(el)
}
