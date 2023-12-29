import { createVNode, render } from 'vue'
import EditPopover from '@/components/EditPopover.vue'

const container = document.createElement('div')
let workEl = null
let tabindex = 0
function createEditPopover(el, context) {
  if (workEl) return el.appendChild(workEl)
  // console.log('createEditPopover');
  const vnode = createVNode(EditPopover)
  vnode.appContext = context
  render(vnode, container)
  workEl = container.firstElementChild
  el.appendChild(container.firstElementChild)
}

function destory() {
  // render(null, container)
  workEl?.remove()
  // console.log('destory');
  // workEl = null
}

export const vEdit = {
  mounted(el, binding, vnode) {
    // console.log({el, binding, vnode});
    el.setAttribute('tabindex', '23' + tabindex++)
    el.classList.add('v-edit')
    el.addEventListener('focus', () => {
      const context = vnode?.ctx?.appContext
      createEditPopover(el, context)
    })
    el.addEventListener('blur', destory)
  }
}
