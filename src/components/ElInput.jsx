import { defineComponent, ref } from 'vue'
import { ElInput } from 'element-plus'
import { useBuilderStore } from '@/stores/builder'
import { useStackWorker } from '@/hooks'

export default defineComponent({
  setup(props) {
    const { pause, restore } = useStackWorker()
    const el = ref(null)
    const builderStore = useBuilderStore()
    let focusBefore = ''
    const handleFocus = () => {
      // builderStore.noRecord = true
      pause()
      focusBefore = el.value.ref.value
    }
    const handleBlur = () => {
      // builderStore.noRecord = false
      restore()
      const value = el.value.ref.value
      if (focusBefore !== value) {
        builderStore.currentPage._key++
      }
    }
    return () => <ElInput {...props} ref={el} onFocus={handleFocus} onBlur={handleBlur}></ElInput>
  }
})
